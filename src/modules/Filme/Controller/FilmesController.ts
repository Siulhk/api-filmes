import { Request, Response, NextFunction } from 'express';
import CreateFilmeService from '@modules/Filme/services/CreateFilmeService';
import DeleteFilmeService from '@modules/Filme/services/DeleteFilmeService';
import ListFilmeService from '@modules/Filme/services/ListFilmeService';
import ShowFilmeService from '@modules/Filme/services/ShowFilmeService';
import UpdateFilmeService from '@modules/Filme/services/UpdateFilmeService';
export default class FilmesController {
 public async index(
 request: Request,
 response: Response,
 next: NextFunction,
 ): Promise<Response | void> {
 try {
 const listfilmes = new ListFilmeService();
 const filmes = await listfilmes.execute();
 return response.json(filmes);
 } catch (err) {
 next(err);
 }
 }
 public async show(
 request: Request,
 response: Response,
 next: NextFunction,
 ): Promise<Response | void> {
 try {
 const id = request.params.id as string;
 const showFilme = new ShowFilmeService();
 const filme = await showFilme.execute({ id });
 return response.json(filme);
 } catch (err) {
 next(err);
 }
 }
 public async create(
 request: Request,
 response: Response,
 next: NextFunction,
 ): Promise<Response | void> {
 try {
 const { name, director, release_date, genre, synopsis, lead_actors } = request.body;
 const createFilme = new CreateFilmeService();
 const filme = await createFilme.execute({
 name,
 director,
 release_date,
 genre,
 synopsis,
 lead_actors
 });
 return response.status(201).json(filme);
 } catch (err) {
 next(err);
 }
 }
 public async update(
 request: Request,
 response: Response,
 next: NextFunction,
 ): Promise<Response | void> {
 try {
 const id = request.params.id as string;
 const { name, director, release_date, genre, synopsis, lead_actors } = request.body;
 const updateFilme = new UpdateFilmeService();
 const filme = await updateFilme.execute({
 id,
 name,
 director,
 release_date,
 genre,
 synopsis,
 lead_actors
 });
 return response.json(filme);
 } catch (err) {
 next(err);
 }
 }
 public async delete(
 request: Request,
 response: Response,
 next: NextFunction,
 ): Promise<Response | void> {
 try {
 const id = request.params.id as string;
 const deleteFilme = new DeleteFilmeService();
 await deleteFilme.execute({ id });
 return response.status(204).send();
 } catch (err) {
 next(err);
 }
 }
}