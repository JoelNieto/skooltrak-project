import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as SubjectsActions from './subjects.actions';
import { SubjectsEffects } from './subjects.effects';
import { SubjectsFacade } from './subjects.facade';
import { SubjectsEntity } from './subjects.models';
import {
  SUBJECTS_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './subjects.reducer';
import * as SubjectsSelectors from './subjects.selectors';

interface TestSchema {
  subjects: State;
}

describe('SubjectsFacade', () => {
  let facade: SubjectsFacade;
  let store: Store<TestSchema>;
  const createSubjectsEntity = (id: string, name = ''): SubjectsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(SUBJECTS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([SubjectsEffects]),
        ],
        providers: [SubjectsFacade],
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
      facade = TestBed.inject(SubjectsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allSubjects$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allSubjects$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadSubjectsSuccess` to manually update list
     */
    it('allSubjects$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allSubjects$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        SubjectsActions.loadSubjectsSuccess({
          subjects: [createSubjectsEntity('AAA'), createSubjectsEntity('BBB')],
        })
      );

      list = await readFirst(facade.allSubjects$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
