import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import Styles from "./contato.module.scss";
import Button from "../button/index";
import Input from "../input";
import { Loading } from "../loading/index";
import { SuccessModal } from "../successModal";
import { FailModal } from "../failModal/index";

const Contato = () => {
  const [isloading, setLoading] = useState(false);
  const [successModal, setModalSuccess] = useState(false);
  const [failModal, setFailModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      mensagem: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Campo Obrigatório"),
      email: Yup.string()
        .email("E-mail inválido")
        .required("Campo Obrigatório"),
      phone: Yup.string()
        .matches("", "Digite um telefone válido")
        .required("Campo Obrigatório"),
      mensagem: Yup.string().required("Campo Obrigatório"),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => handleSubmitForm(values),
  });

  const handleSubmitForm = (values) => {
    setLoading(true);
    axios
      .post("/api/sendEmail", {
        messageBody: `Nome: ${values.name}, Email: ${values.email}, Telefone: ${values.phone}, Mensagem: ${values.mensagem}`,
      })
      .then(() => {
        formik.resetForm();
        setLoading(false);
        setModalSuccess(true);
      })
      .catch(() => {
        setLoading(false);
        setFailModal(true);
      });
  };

  const closeModal = () => {
    setFailModal(false);
    setModalSuccess(false);
  };

  return (
    <>
      {successModal && <SuccessModal closeModal={closeModal} />}
      {failModal && <FailModal closeModal={closeModal} />}
      {isloading && <Loading />}
      <div className={Styles.container} id="contato">
        <div className={Styles.texts}>
          <span>ENTRE EM CONTATO</span>
          <h1>Estamos prontos para tirar seu projeto do papel!</h1>
          <p>
            Fale com a gente! Tem um projeto em mente ou precisa de ajuda para
            transformar seu espaço? Nossa equipe está pronta para atender você
            com atenção e agilidade.
          </p>
        </div>
        <div className={Styles.form}>
          <h1>Fale com um especialista</h1>

          <form id="formulario" onSubmit={formik.handleSubmit}>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Digite seu Nome"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              required
            />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Digite seu email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              required
            />
            <Input
              id="phone"
              name="phone"
              type="text"
              placeholder="Celular/Whatsapp"
              pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.phone}
              required
            />
            <Input
              id="mensagem"
              name="mensagem"
              type="text"
              placeholder="Digite sua mensagem"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.mensagem}
              required
            />

            <Button type="submit" title="Enviar" kind="full" />
          </form>
        </div>
        {/* <div className={Styles.footer}>
          <p>
            Ao enviar esse formulário, você reconhece que leu e concorda com a
            nossa
            <Link href="/">
              <span> Política de Privacidade.</span>
            </Link>
          </p>
        </div> */}
      </div>
    </>
  );
};

export default Contato;
