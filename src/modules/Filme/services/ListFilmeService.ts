import { AppDataSource } from "@shared/typeorm/data-source";
import Filme from "@shared/typeorm/entities/Filme";
export default class ListFilmeService {
 public async execute(): Promise<Filme[]> {
 const FilmesRepository = AppDataSource.getRepository(Filme);
 return FilmesRepository.find();
 }
}