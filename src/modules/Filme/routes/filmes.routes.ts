import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import FilmesController from '@modules/Filme/Controller/FilmesController';
const filmesRouter = Router();
const filmesController = new FilmesController();
filmesRouter.get('/', async (req, res, next) => {
 try {
 await filmesController.index(req, res, next);
 } catch (err) {
 next(err);
 }
});
filmesRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  async (req, res, next) => {
    try {
      await filmesController.show(req, res, next);
    } catch (err) {
      next(err);
    }
  }
);
filmesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      director: Joi.string().required(),
      release_date: Joi.string().required(),
      genre: Joi.string().required(),
      synopsis: Joi.string().required(),
      lead_actors: Joi.string().required(),
    },
  }),
  async (req, res, next) => {
    try {
      await filmesController.create(req, res, next);
    } catch (err) {
      next(err);
    }
  }
);
filmesRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().required(),
      director: Joi.string().required(),
      release_date: Joi.string().required(),
      genre: Joi.string().required(),
      synopsis: Joi.string().required(),
      lead_actors: Joi.string().required(),
    },
  }),
  async (req, res, next) => {
    try {
      await filmesController.update(req, res, next);
    } catch (err) {
      next(err);
    }
  }
);
filmesRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  async (req, res, next) => {
    try {
      await filmesController.delete(req, res, next);
    } catch (err) {
      next(err);
    }
  }
);
export default filmesRouter;