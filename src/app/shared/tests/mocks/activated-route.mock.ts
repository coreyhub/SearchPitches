import { BehaviorSubject } from 'rxjs';
import { ParamMap, convertToParamMap } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ActivatedRouteMock {
  private paramsSubject = new BehaviorSubject(this.testParams);
  private paramMapSubject = new BehaviorSubject(
    convertToParamMap(this.testParamMap)
  );
  private queryParamMapSubject = new BehaviorSubject(
    convertToParamMap(this.testParamMap)
  );
  private _testParams: {};
  private _testParamMap: ParamMap;
  private _testQueryParamMap: ParamMap;

  params = this.paramsSubject.asObservable();
  queryParamMap = this.queryParamMapSubject.asObservable();

  get testParams() {
    return this._testParams;
  }
  set testParams(newParams: any) {
    this._testParams = newParams;
    this.paramsSubject.next(newParams);
  }

  get testParamMap() {
    return this._testParamMap;
  }
  set testParamMap(params: {}) {
    this._testParamMap = convertToParamMap(params);
    this.paramMapSubject.next(this._testParamMap);
  }

  get testQueryParamMap() {
    return this._testQueryParamMap;
  }
  set testQueryParamMap(params: {}) {
    this._testQueryParamMap = convertToParamMap(params);
    this.queryParamMapSubject.next(this._testQueryParamMap);
  }

  get snapshot() {
    return {
      paramMap: this.testParamMap,
      queryParamMap: this.testQueryParamMap
    };
  }

  // Observable that contains a map of the parameters
  // private subjectParamMap = new BehaviorSubject(
  //   convertToParamMap(this.testParamMap)
  // );
  // paramMap = this.subjectParamMap.asObservable();

  // private _testParamMap: ParamMap;
  // get testParamMap() {
  //   return this._testParamMap;
  // }
  // set testParamMap(params: {}) {
  //   this._testParamMap = convertToParamMap(params);
  //   this.subjectParamMap.next(this._testParamMap);
  // }

  // // Observable that contains a map of the query parameters
  // private subjectQueryParamMap = new BehaviorSubject(
  //   convertToParamMap(this.testParamMap)
  // );
  // queryParamMap = this.subjectQueryParamMap.asObservable();

  // private _testQueryParamMap: ParamMap;
  // get testQueryParamMap() {
  //   return this._testQueryParamMap;
  // }
  // set testQueryParamMap(params: {}) {
  //   this._testQueryParamMap = convertToParamMap(params);
  //   this.subjectQueryParamMap.next(this._testQueryParamMap);
  // }

  // get snapshot() {
  //   return {
  //     paramMap: this.testParamMap,
  //     queryParamMap: this.testQueryParamMap
  //   };
  // }
}
