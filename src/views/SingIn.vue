<template>
    <div class="flex-box" >
        <div class="aboutUs" >
            <img  class="bigImg" src="../assets/AboutUs.png" alt="bigImg">
            <span class="aboutUsText" >"Rick y Morty" es una serie animada de ciencia ficción absurda y llena de humor negro. Sigue las aventuras del científico borracho Rick y su nieto Morty a través de múltiples universos y dimensiones. Con una animación impresionante y una trama profunda, esta serie es una sátira inteligente y un must-watch para los fans de la ciencia ficción y el humor.
            </span>
        </div>
        <div class="home">
            <div :class="[
                'wrapper',
                handleClick1 === true
                ? 'animate-signIn'
                : ' ' && handleClick2 === false
                ? 'animate-signUp'
                : ' ',
            ]">
                <div class="form-wrapper sign-up">
                    <form action="" @submit.prevent="registerSubmit">
                        <h2>Registrate</h2>
                        <div class="input-group">
                            <input v-model="userForm.first_name" type="text" required />
                            <label for="">Nombre</label>
                        </div>
                        <div class="input-group">
                            <input v-model="userForm.last_name" type="text" required />
                            <label for="">Apellido</label>
                        </div>
                        <div class="input-group">
                            <input v-model="userForm.email" type="email" required />
                            <label for="">Correo</label>
                        </div>
                        <div class="input-group">
                            <input v-model="userForm.password" type="password" required />
                            <label for="">Clave</label>
                        </div>
                        <div class="input-group">
                            <input v-model="userForm.password_confirm" type="password" required />
                            <label for="">Confirma tu clave</label>
                        </div>
                        <button type="submit" class="btn">Enviar</button>
                        <div class="sign-link">
                            <p>
                                Ya tienes cuenta?
                                <a @click="
                                handleClick1 = !handleClick1;
                                handleClick2 = !handleClick2;
                                " href="#" class="signIn-link">Ingresa por aqui</a>
                            </p>
                        </div>
                    </form>
                </div>
                <div class="form-wrapper sign-in">
                    <form action="" @submit.prevent="loginSubmit">
                        <h2>Ingresa</h2>
                        <div class="input-group">
                            <input v-model="userPush.email" type="text" required />
                            <label for="">Correo</label>
                        </div>
                        <div class="input-group">
                            <input v-model="userPush.password" type="password" required />
                            <label for="">Clave</label>
                        </div>
                        <div class="forgot-pass">
                            <a href="#">Clave perdida?</a>
                        </div>
                        <button type="submit" class="btn">Entrar</button>
                        <div class="sign-link">
                            <p>
                                Aun no te registras?
                                <a @click="
                                handleClick1 = !handleClick1;
                                handleClick2 = !handleClick2;
                                " href="#" class="signUp-link">Click aqui</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";
import useAuth from "../composables/useAuth";

export default {
    setup() {
        let handleClick1 = false;
        let handleClick2 = false;
        const router = useRouter();
        const { createUser, loginUser } = useAuth();
        const userForm = ref({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            password_confirm: "",
        });
        const userPush = ref({
            email: "",
            password: "",
        });
        return {
            handleClick1,
            handleClick2,
            userForm,
            userPush,
            onsubmit: async () => {
            },
            registerSubmit: async () => {
                const { ok, message } = await createUser(userForm.value);
                if (!ok) {
                    Swal.fire("Verifica la informacion", message, "error");
                } else {
                    router.push({ name: "home" });
                }
            },
            loginSubmit: async () => {
                const { ok, message } = await loginUser(userPush.value);
                if (!ok) {
                    Swal.fire("Verifica la informacion", message, "error");
                } else {
                    router.push({ name: "home" });
                }
            },
        };
    },
};
</script>

<style scoped>
.flex-box{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0px;
}
.aboutUs{
    width: 50%;
    height: 70vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.aboutUsText {
    position: absolute;
    z-index: -1;
    bottom: 20%;
    right: 16%;
    width: 45%;
    transform: rotate(-25deg);
}
.bigImg {
    position: absolute;
    width: auto;
    height: 65vh;
}
.home {
    width: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.logoProject {
    height: auto;
    width: 15%;
    margin: 0 0 35px 0;
}
.logoVue {
    position: absolute;
    top: 10px;
    left: 15px;
}
.wrapper {
    position: relative;
    width: calc(400px + 150px);
    height: calc(500px + 150px);
}
.form-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: rgba(52, 40, 32, 0.8506556919642857);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border: 1px white solid;
    border-radius: 30px;
    transition: 1s ease-out;
}
.animate-signUp .form-wrapper.sign-in {
    transform: rotate(3.5deg);
    animation: animateRotate 0.7s ease-in-out forwards;
    animation-delay: 0.3s;
    background-color: #ffffff;
    border: 1px black solid;
    border-radius: 30px;
}
.animate-signIn .form-wrapper.sign-in {
    animation: animateSignIn 1.5s ease-in-out forwards;
}
@keyframes animateSignIn {
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(-500px);
    }
    100% {
        transform: translateX(0) rotate(3.5deg);
    }
}
.wrapper .form-wrapper.sign-up {
    transform: rotate(3.5deg);
}
.wrapper.animate-signIn .form-wrapper.sign-up {
    animation: animateRotate 0.7s ease-in-out forwards;
    animation-delay: 0.3s;
    background-color: #ffffff;
}
@keyframes animateRotate {
    0% {
        transform: rotate(3.5deg);
    }
    100% {
        transform: rotate(0);
        z-index: 1;
    }
}
.wrapper.animate-signUp .form-wrapper.sign-up {
    animation: animateSignUp 1.5s ease-in-out forwards;
}
@keyframes animateSignUp {
    0% {
        transform: translateX(0);
        z-index: 1;
    }
    50% {
        transform: translateX(500px);
    }
    100% {
        transform: translateX(0) rotate(3.5deg);
    }
}
h2 {
    font-size: 30px;
    color: #555;
    text-align: center;
}
.input-group {
    position: relative;
    width: 320px;
    margin: 30px 0;
}
.input-group label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    font-size: 16px;
    color: #333;
    padding: 0 5px;
    pointer-events: none;
    transition: 0.5s;
}
.input-group input {
    width: 100%;
    height: 40px;
    font-size: 16px;
    color: #333;
    padding: 0 10px;
    background: transparent;
    border: 1px solid #333;
    outline: none;
    border-radius: 5px;
}
.input-group input:focus~label,
.input-group input:valid~label {
    top: 0;
    font-size: 12px;
    background: #fff;
}
.forgot-pass {
    margin: -15px 0 15px;
}
.forgot-pass a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
}
.forgot-pass a:hover {
    text-decoration: underline;
}
.btn {
    position: relative;
    top: 0;
    left: 0;
    width: 342px;
    height: 40px;
    background: #35324a;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
    font-size: 16px;
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    outline: none;
}
.sign-link {
    font-size: 18px;
    text-align: center;
    margin: 25px 0;
}
.sign-link p {
    color: #333;
}
.sign-link p a {
    color: #ed1b2e;
    text-decoration: none;
    font-weight: 600;
}
.sign-link p a:hover {
    text-decoration: underline;
}
</style>