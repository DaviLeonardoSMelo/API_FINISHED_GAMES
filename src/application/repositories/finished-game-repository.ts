import { GameFinished } from "@application/entities/game/finished.games";

export abstract class GameRepository {
    abstract create(gameFinished: GameFinished): Promise<void>;
    abstract findById(finishedId: string): Promise<GameFinished | null>;
    abstract save(gameFinished: GameFinished): Promise<void>;
    abstract countManyByGameId(finishedId: string): Promise<number>;
    abstract findManyByGameId(finishedId: string): Promise<GameFinished[]>
}