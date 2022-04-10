import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { RoleGroup, RoleType } from '@skooltrak-project/data/models';
import * as bcrypt from 'bcrypt';
import * as _ from 'lodash';
import { Model } from 'mongoose';

import { User, UserDocument } from '../users/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly jwt: JwtService
  ) {}

  async validateUser(
    login: { username: string; password: string },
    role: RoleGroup
  ) {
    const roles = RoleType.ROLES.filter((x) => x.group === role);

    const { username, password } = login;
    const user = await this.userModel.findOne({ username });

    if (!user) {
      return null;
    }
    if (await bcrypt.compare(password, user.password)) {
      if (!_.filter(roles, { name: user.role }).length) {
        return null;
      }
      return user;
    }
  }

  async login(user: UserDocument) {
    const payload = {
      email: user.email,
      lastname: user.lastname,
      firstname: user.firstname,
      role: user.role,
      _id: user._id,
    };
    return {
      access_token: this.jwt.sign(payload),
    };
  }
}
