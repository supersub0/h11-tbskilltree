declare let window: any;
declare let cordova: any;
import { Skill } from './skill';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SkillService {
    protected _skilltreeFile = './assets/skilltree.json';

    protected _skilltree: Skill[] = [];

    constructor(private http: HttpClient) {}

    public getSkilltree(): Observable<Skill[]> {
        this._skilltree = [];
        const lsSkilltree = window.localStorage.getItem('tbskilltree');

        if (lsSkilltree !== null) {
            for (const skill of JSON.parse(lsSkilltree)) {
                Object.setPrototypeOf(skill, Skill);
                this._skilltree.push(skill);
            }
        }

        if (this._skilltree.length <= 0) {
            return this.http.get<Skill[]>(this._skilltreeFile);
        }

        return new Observable<Skill[]>(
            (observer: any) => {
                observer.next(this._skilltree);
                observer.complete();
            }
        );
    }

    public setSkilltree(skilltree: Skill[]): void {
        if (skilltree.length > 0) {
            this._skilltree = skilltree;
            window.localStorage.setItem('tbskilltree', JSON.stringify(skilltree));
        } else {
            this._skilltree = [];
            window.localStorage.setItem('tbskilltree', '[]');
        }
    }

    public resetSkilltree(): void {
        this._skilltree = [];
        window.localStorage.clear();
    }
}
