declare let cordova: any;
declare let navigator: any;
import { Skill } from './skill';
import { Component, OnInit } from '@angular/core';
import { SkillService } from './skill.service';

@Component({
    selector: 'app-skilltree',
    templateUrl: './skilltree.component.html',
    styleUrls: ['./skilltree.component.css']
})

export class SkilltreeComponent implements OnInit {
    public skilltree: Skill[] = [];

    constructor(public skillService: SkillService) {
    }

    public ngOnInit(): void {
        this.skillService.getSkilltree().subscribe((skills: Skill[]) => {this.skilltree = skills;});
    }

    public resetSkilltreeDone(): void {
        for (const skill of this.skilltree) {
            skill.done = false;
        }

        this.skillService.setSkilltree(this.skilltree);
    }

    public resetSkilltree(): void {
        this.skilltree = [];
        this.skillService.resetSkilltree();
        this.skillService.getSkilltree().subscribe((skills: Skill[]) => {this.skilltree = skills;});
    }

    public toggleSkillDone(skill: Skill): void {
        skill.done = !skill.done;

        this.skillService.setSkilltree(this.skilltree);
    }

    public getPercentageDone(): string {
        return (this.getDoneCount(this.skilltree) / this.skilltree.length * 100) + '%';
    }

    protected getDoneCount(skilltree: Skill[]): number {
        let doneCount = 0;

        for (const skill of skilltree) {
            if (skill.done) {
                doneCount++;
            }
        }

        return doneCount;
    }

    public getSkillDetail(skill: Skill): string {
        let skillDetail = '';

        skillDetail = skill.detail.join('<br />');

        for (let i = 0; i < skill.detail_args.length; i++) {
            skillDetail = skillDetail.replace(new RegExp(':' + i), skill.detail_args[i]);
        }

        return skillDetail;
    }
}
