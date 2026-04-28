import { AppDataSource } from "@shared/typeorm/data-source";
import { Repository } from "typeorm";
import Filme from "@shared/typeorm/entities/Filme";
export default class FilmesRepository {
 private ormRepository: Repository<Filme>;
 constructor() {
 this.ormRepository = AppDataSource.getRepository(Filme);
 }
 public async findByName(name: string): Promise<Filme | null> {
 const filme = await this.ormRepository.findOne({
 where: { name },
 });
 return filme;
 }
}