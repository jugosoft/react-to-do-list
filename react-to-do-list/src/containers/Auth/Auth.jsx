import React from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

export default class Auth extends React.Component {

    state = {
        isFormValid: false,
        password: {
            value: '',
            valid: false,
            touched: false,
            error: 'Введите мыло нормально'
        },
        email: {
            value: '',
            valid: false,
            touched: false,
            error: 'Пароль слабоват'
        }
    }

    loginHandler = () => {
        // console.debug('Ну типа послали на сервер что-то');
        setTimeout(() => {
            alert('Успешно залогинен');
        }, Math.round(Math.random() * 1000 % 10000));

    }

    registerHandler = () => {
        console.debug('Ну типа послали на сервер что-то');
    }

    submitHandler = event => {
        event.preventDefault();
    }

    validateControl(value, validation) {
        if (!validation) {
            return true;
        }

        let isValid = true;

        if (validation.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (validation.email) {
            isValid = /\S+@\S+\.\S+/.test(value) && isValid;
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid;
        }

        return isValid;
    }

    onChangeHandler = (event, controlName) => {
        let isValid = true;
        let value = event.target.value;
        switch (controlName) {
            case 'email':
                isValid = /\S+@\S+\.\S+/.test(value) && isValid;
                isValid = value.trim() !== '' && isValid;
                this.setState({
                    email: { value: value, touched: true, valid: isValid }
                });
                break;
            case 'password':
                isValid = value.length >= 6 && isValid;
                this.setState({
                    password: { value: value, touched: true, valid: isValid }
                });
                break;
        }
        if (this.state.email.valid && this.state.password) {
            this.setState({
                isFormValid: true
            });
        }
        else{
            this.setState({
                isFormValid: false
            });
        }
    }
    render() {
        return (
            <div className={'Auth'}>
                <div>
                    <h1>Авторизация</h1>

                    <form onSubmit={this.submitHandler} className={'AuthForm'}>

                        <Input
                            key={1}
                            type='email'
                            value={this.state.email.value}
                            valid={this.state.email.valid}
                            touched={this.state.email.touched}
                            label='Email'
                            shouldValidate={true}
                            errorMessage='Введите корректный email'
                            onChange={event => this.onChangeHandler(event, 'email')}
                        />

                        <Input
                            key={2}
                            type='password'
                            value={this.state.password.value}
                            valid={this.state.password.valid}
                            touched={this.state.password.touched}
                            label={'Пароль'}
                            shouldValidate={true}
                            errorMessage={'Пароль должен удовлетворять условиям'}
                            onChange={event => this.onChangeHandler(event, 'password')}
                        />

                        <Button
                            onClick={this.loginHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Войти
                        </Button>

                        <Button
                            onClick={this.registerHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Зарегистрироваться
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}