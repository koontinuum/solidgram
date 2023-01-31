import React from "react";
import Input from "../../components/input/Input";
import styles from "../loginPage/LoginPage.module.css";

function LoginPage() {
  return (
    <div>
      <form className={styles.form}>
        <img src="ins.png" alt="" />
        <Input
          type="text"
          placeholder="Телефон, имя пользователя или эл. адрес"
        />
        <Input type="password" placeholder="Пароль" />
        <button className="btn">Войти</button>
        <div className="container">
          <hr />
          <p>ИЛИ</p>
          <hr />
        </div>
        <div className="container2">
          <img src="faceicon.png" alt="" />
          <a href="https://www.facebook.com/">Войти через Facebook</a>
        </div>
        <a type="submit" id="submit" href="">
          Забыли пароль?
        </a>
      </form>
      <div className="container3">
        <p>
          У вас еще нет аккаунта?<a href="">Зарегестрироваться</a>
        </p>
      </div>
      <div className="container4">
        <p>Установите приложение.</p>
        <div className="imagesicon">
          <img src="fDjwyLC88oO.png" alt="" />
          <img src="_UbeIRgTpG-.png" alt="" />
        </div>
      </div>
      <div className="iconimg">
        <img src="Screenshot.png" alt="" />
      </div>
    </div>
  );
}

export default LoginPage;
