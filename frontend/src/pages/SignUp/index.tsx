import React from 'react';
import {
	FiArrowLeft, FiMail, FiLock, FiUser,
} from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
	<Container>
		<Background />
		<Content>
			<img src={logoImg} alt="Logo GoBarber" />

			<form>
				<h1>Faça seu cadastro</h1>

				<Input name="Name" icon={FiUser} placeholder="Nome" />

				<Input name="Email" icon={FiMail} placeholder="E-mail" />

				<Input name="Password" icon={FiLock} type="password" placeholder="Senha" />

				<Button type="submit">Cadastrar</Button>
			</form>

			<a href="hi">
				<FiArrowLeft />
				Voltar para logon
			</a>
		</Content>
	</Container>
);

export default SignUp;