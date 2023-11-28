import { Game } from "@application/entities/game/game";

export abstract class GameRepository {
    abstract create(game: Game): Promise<void>;
    abstract findById(idGame: string): Promise<Game | null>;
    abstract save(game: Game): Promise<void>;
    abstract countManyByGameId(idGame: string): Promise<number>;
    abstract findManyByGameId(idGame: string): Promise<Game[]>
}