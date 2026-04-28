import AppError from "@shared/errors/AppError";
import { AppDataSource } from "@shared/typeorm/data-source";
import Filme from "@shared/typeorm/entities/Filme";
interface IRequest {
  id: string;
  name: string;
  director: string;
  release_date: Date;
  genre: string;
  synopsis: string;
  lead_actors: string;
}
export default class UpdateFilmeService {
 public async execute({ id, name, director, release_date, genre, synopsis, lead_actors }: IRequest):
Promise<Filme> {
 const FilmesRepository = AppDataSource.getRepository(Filme);
 const filme = await FilmesRepository.findOneBy({ id });
 if (!filme) {
 throw new AppError("Movie not found.");
 }
 const FilmeExists = await FilmesRepository.findOneBy({ name
});
 if (FilmeExists && FilmeExists.id !== filme.id) {
 throw new AppError("There is already one movie with this name.");
 }
 filme.name = name;
 filme.director = director;
 filme.release_date = release_date;
 filme.genre = genre;
 filme.synopsis = synopsis;
 filme.lead_actors = lead_actors;
 await FilmesRepository.save(filme);
 return filme;
 }
}