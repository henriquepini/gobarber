import React, { useCallback } from 'react';
import {
	FiArrowLeft, FiMail, FiLock, FiUser,
} from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
	const handleSubmit = useCallback(async (data: object) => {
		console.log(data);
		try {
			const schema = Yup.object().shape({
				Name: Yup.string().required('Nome obrigatório'),
				Email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
				Password: Yup.string().min(6, 'No mínimo 6 dígitos'),
			});

			await schema.validate(data, {
				abortEarly: false,
			});
		} catch (err) {
			console.log(err);
		}
	}, []);
	return (
		<Container>
			<Background />
			<Content>
				<img src={logoImg} alt="Logo GoBarber" />

				<Form onSubmit={handleSubmit}>
					<h1>Faça seu cadastro</h1>

					<Input name="Name" icon={FiUser} placeholder="Nome" />

					<Input name="Email" icon={FiMail} placeholder="E-mail" />

					<Input name="Password" icon={FiLock} type="password" placeholder="Senha" />

					<Button type="submit">Cadastrar</Button>
				</Form>

				<a href="hi">
					<FiArrowLeft />
					Voltar para logon
				</a>
			</Content>
		</Container>
	);
};

export default SignUp;
