/* eslint-disable prettier/prettier */
import { randomUUID }  from 'node:crypto';
import { Replace } from "../../../helpers/Replace";
import { Resume } from './resume';
import { Score } from './score';

export interface GameProps {
    finishedId: string;
    nameGame: string;
    finishedDate: Date;
    registerDate: Date;
    resume: Resume;
    score: Score;
    gameplayTime?: number | null;
    hundredPercent: boolean;
    userId: string;
}
export class Game {
    private _id: string;
    private props: GameProps;
    
    constructor(props: Replace<GameProps, {registerDate?: Date}>,finishedId?: string,) {
        this._id = finishedId ?? randomUUID();
        this.props = { 
            ...props,
            registerDate: props.registerDate ?? new Date()
        }
    }
    public get finishedId() {
        return this._id;
    }
    public get nameGame() {
        return this.props.nameGame
    }
    public set nameGame(nameGame: string){
        this.props.nameGame = nameGame
    }
    public get finishedDate() {
        return this.props.finishedDate
    }
    public set finishedDate(finishedDate: Date){
        this.props.finishedDate = finishedDate
    }
    public get registerDate() {
        return this.props.registerDate
    }
    public get resume(): Resume {
        return this.props.resume
    }
    public set resume(resume: Resume){
        this.props.resume = resume
    }
    public get score(): Score {
        return this.props.score
    }
    public set score(score: Score){
        this.props.score = score
    }
    public get gameplayTime(): number | null | undefined {
        return this.props.gameplayTime
    }
    public set gameplayTime(gameplayTime: number){
        this.props.gameplayTime = gameplayTime
    }
    public get hundredPercent() {
        return this.props.hundredPercent
    }
    public set hundredPercent(hundredPercent: boolean){
        this.props.hundredPercent = hundredPercent
    }
    public get userId() {
        return this.props.userId
    }
    public set userId(userId: string){
        this.props.userId = userId
    }
}