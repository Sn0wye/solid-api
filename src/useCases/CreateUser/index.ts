import { MailTrapMailProvider } from '../../providers/implementations/MailTrapMailProvider';
import { PostgresUsersReposity } from '../../repositories/implementations/PostgresUsersRepository';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const mailTrapMailProvider = new MailTrapMailProvider();
const postgresUsersReposity = new PostgresUsersReposity();

const createUserUseCase = new CreateUserUseCase(
  postgresUsersReposity,
  mailTrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
