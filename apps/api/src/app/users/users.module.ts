/* eslint-disable @typescript-eslint/no-this-alias */
import { Logger, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

import { User, UserSchema } from './schemas/user.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          const schema = UserSchema;
          schema.pre<any>('save', function (next) {
            const user = this;
            Logger.debug('user', JSON.stringify(user));
            if (this.isModified('password') || this.isNew) {
              bcrypt.genSalt(10, (saltError, salt) => {
                if (saltError) {
                  return next(saltError);
                } else {
                  bcrypt.hash(user.password, salt, (hashError, hash) => {
                    if (hashError) {
                      return next(hashError);
                    }
                    user.password = hash;
                    next();
                  });
                }
              });
            } else {
              return next();
            }
          });
          return schema;
        },
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [MongooseModule],
})
export class UsersModule {}
