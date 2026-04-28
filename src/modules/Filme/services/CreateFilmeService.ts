import AppError from "@shared/errors/AppError";
import { AppDataSource } from "@shared/typeorm/data-source";
import Filme from "@shared/typeorm/entities/Filme";
interface IRequest {
   name: string;
   director: string;
   release_date: Date;
   genre: string;
   synopsis: string;
   lead_actors: string;
}
export default class CreateFilmeService {
 public async execute({ name, director, release_date, genre, synopsis, lead_actors }: IRequest):
Promise<Filme> {
 const FilmesRepository = AppDataSource.getRepository(Filme);
 const FilmeExists = await FilmesRepository.findOne({
 where: { name },
 });
 if (FilmeExists) {
 throw new AppError("There is already one movie with this name.");
 }
 const filme = FilmesRepository.create({
 name,
 director,
 release_date,
 genre,
 synopsis,
 lead_actors
 });
 await FilmesRepository.save(filme);
 return filme;
 }
}