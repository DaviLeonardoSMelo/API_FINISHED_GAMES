import { randomUUID }  from 'node:crypto';
import { Replace } from "../../../helpers/Replace";
import { Name } from '../name';

export interface GameProps {
    idGame?: string;
    creator: string;
    nameGame: Name;
    registerGameDate: Date;
}
export class Game {
    private _id: string;
    private props: GameProps;
    
    constructor(props: Replace<GameProps, {registerGameDate?: Date}>,idGame?: string,) {
        this._id = idGame ?? randomUUID();
        this.props = { 
            ...props,
            registerGameDate: props.registerGameDate ?? new Date()

        }
    }
    public get idGame() {
        return this._id;
    }
    public get nameGame(): Name {
        return this.props.nameGame
    }
    public set nameGame(nameGame: Name) {
        this.props.nameGame = nameGame
    }
    public get creator() {
        return this.creator;
    }
    public set creator(creator: string) {
        this.props.creator = creator
    }
    public get registerGameDate() {
        return this.props.registerGameDate
    }
}