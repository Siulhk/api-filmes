import AppError from "@shared/errors/AppError";
import { AppDataSource } from "@shared/typeorm/data-source";
import Filme from "@shared/typeorm/entities/Filme";
interface IRequest {
 id: string;
}
export default class ShowFilmeService {
 public async execute({ id }: IRequest): Promise<Filme> {
 const FilmesRepository = AppDataSource.getRepository(Filme);
 const filme = await FilmesRepository.findOneBy({ id });
 if (!filme) {
 throw new AppError("Movie not found.");
 }
 return filme;
 }
}