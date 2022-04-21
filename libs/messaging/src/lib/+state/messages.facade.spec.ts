import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as MessagesActions from './messages.actions';
import { MessagesEffects } from './messages.effects';
import { MessagesFacade } from './messages.facade';
import { MessagesEntity } from './messages.models';
import {
  MESSAGES_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './messages.reducer';
import * as MessagesSelectors from './messages.selectors';

interface TestSchema {
  messages: State;
}

describe('MessagesFacade', () => {
  let facade: MessagesFacade;
  let store: Store<TestSchema>;
  const createMessagesEntity = (id: string, name = ''): MessagesEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(MESSAGES_FEATURE_KEY, reducer),
          EffectsModule.forFeature([MessagesEffects]),
        ],
        providers: [MessagesFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(MessagesFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allMessages$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allMessages$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadMessagesSuccess` to manually update list
     */
    it('allMessages$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allMessages$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        MessagesActions.loadMessagesSuccess({
          messages: [createMessagesEntity('AAA'), createMessagesEntity('BBB')],
        })
      );

      list = await readFirst(facade.allMessages$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
