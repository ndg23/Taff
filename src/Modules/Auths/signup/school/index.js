import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Button, useToast } from '@chakra-ui/react'
import * as Yup from 'yup'

import './signup.css'

export default function SchoolSignup() {
  const [error, setError] = useState()
  const [load, setLoad] = useState(false)
  const [fac, setFac] = useState([])
  const facultiesArray = []
  const admission_type = []
  const toast = useToast()

  const [school, setschool] = useState({
    name: '',
    tel: '',
    password: '',
    email: '',
    school_name: '',
    sigle: '',
    school_pay: '',
    adress: '',
    begin_inscription: '',
    friends: [],
    admission_type: '',
    school_type: '',
    faculties: '',
    inscription_cost: '',
  })

  function signup(values) {
    if (!facultiesArray.length > 1) {
      return alert('Il faut au moins une filiere...')
    }

    setLoad(true)
    const school = { ...values, faculties: fac }
    //Object.assign(values, { faculties: fac });
    console.log(values)

    axios
      .post(`${process.env.REACT_APP_SERVER}school/signup`, school)
      .then((res) => {
        const { token, roles, id } = res?.data
        setLoad(false)
        if (Object.keys(res.data).length > 0) {
          localStorage.setItem('token', token)
          localStorage.setItem('roles', roles)
          localStorage.setItem('id', id)
          toast({
            title: ` Compte cree avec succes`,
            status: `success`,
            variant: `left-accent`,
            isClosable: true,
          })
        }
      })
      .catch((error) => {
        console.log(error.response)

        setLoad(false)
        setError([error.response.data])
      })
  }
  const formik = useFormik({
    initialValues: {
      name: '',
      tel: '',
      password: '',
      email: '',
      roles: 'School',
      school_name: '',
      sigle: '',
      school_pay: '',
      adress: '',
      begin_inscription: '',
      admission_type: '',
      school_type: '',
      faculties: fac,
      inscription_cost: '',
    },
    onSubmit: async (values) => {
      await signup(values)
      console.log('hello', values)
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, 'Moins de 20 caracteres')
        .required('Ce champ est requis.'),
      email: Yup.string()
        .email('Mettez un email valide')
        .lowercase()
        .required('Ce champ est requis'),
      sigle: Yup.string()
        .max(5, 'Pas plus de 5 lettres')
        .matches(/^[A-Z]+$/, 'Uniquement des lettres')
        .uppercase(),
      tel: Yup.string().required('Ce champ est requis'),
      password: Yup.string()
        .required('Ce champ est requis !')
        .min(4, 'Il faut au moins 4 caracteres'),
      school_name: Yup.string()
        .max(20, 'Nom trop long')
        .required('Ce champ est requis'),
      admission_type: Yup.string().required('Ce champ est requis'),
      school_type: Yup.string().required('Ce champ est requis '),
      school_pay: Yup.number().required('Ce champ est requis '),
      inscription_cost: Yup.number().required('Ce champ est requis '),
      begin_inscription: Yup.string().required('Ce champ est requis '),
    }),
  })

  function handleInput2(e) {
    let { value, checked } = e.target
    if (!!checked) {
      facultiesArray.push(value)
      setFac((x) => [...x, value])
    } else {
      const newArr = fac.filter((x) => {
        return x !== value
      })
      setFac(newArr)
    }
  }

  return (
    <>
    <div className=''>
      <div className="row container justify-center">
        <div className="col-lg-5">
          <form onSubmit={formik.handleSubmit} className="form ui  p-3">
            <h2 className="text-3xl mt-3 text-gray-500  font-bold ">
              Creer un compte professionnel
            </h2>
            <fieldset className="bg-white p-3">
              <legend className="font-bold text-xl">Connexion et profil</legend>
              <div className="field leading-none my-2">
                <label className="" for="tel">
                  Nom
                </label>
                <input
                  type="text"
                  name="name"
                  className="mb-0 form-control"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                />
                <small className="helper-text form-tex text-red-500">
                  {formik.touched.name && formik.errors.name}
                </small>
              </div>

              <div className="field leading-none my-2">
                <label className=" leading-none font-bold" Htmlfor="email">
                  E-mail
                </label>
                <input
                  type="text"
                  className="mt-0"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                />
                <small className="helper-text form-tex text-red-500">
                  {formik.touched.email && formik.errors.email}
                </small>
              </div>
              <div className="field leading-none my-2">
                <label className="leading-none font-bold" for="tel">
                  Numero de telephone
                </label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  className="mb-0"
                  value={formik.values.tel}
                  onChange={formik.handleChange}
                  error={formik.touched.tel && Boolean(formik.errors.tel)}
                />
                <small className="helper-text form-tex text-red-500">
                  {formik.touched.tel && formik.errors.tel}
                </small>
              </div>
              <div className="field leading-none my-2">
                <label className="leading-none font-bold" for="tel">
                  Mot de passe
                </label>
                <input
                  type="password"
                  className="mb-0"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                />
                <small className="helper-text form-tex text-red-500">
                  {formik.touched.password && formik.errors.password}
                </small>
              </div>
            </fieldset>
            <fieldset className="bg-white p-3">
              <legend className=" font-bold text-xl">Ecole et finances</legend>
              <div className="field leading-none my-2">
                <label className="leading-none font-bold" for="tel">
                  Nom de l'ecole
                </label>
                <input
                  type="text"
                  className="mb-0 form-control"
                  name="school_name"
                  value={formik.values.school_name}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.school_name &&
                    Boolean(formik.errors.school_name)
                  }
                />
                <small className="helper-text form-tex text-red-500">
                  {formik.touched.school_name && formik.errors.school_name}
                </small>
              </div>
              <div className="field leading-none my-2">
                <label className="leading-none font-bold" for="tel">
                  Sigle
                </label>
                <input
                  type="text"
                  className="mb-0 form-control"
                  name="sigle"
                  value={formik.values.sigle}
                  onChange={formik.handleChange}
                  error={formik.touched.sigle && Boolean(formik.errors.sigle)}
                />
                <small className="helper-text form-tex text-red-500">
                  {formik.touched.sigle && formik.errors.sigle}
                </small>
              </div>
              <div className="field leading-none my-2">
                <label className="leading-none font-bold" for="tel">
                  Type d'ecole
                </label>
                <select
                  name="school_type"
                  className="form-control orm-select"
                  value={formik.values.school_type}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.school_type &&
                    Boolean(formik.errors.school_type)
                  }
                >
                  <option value="universite">Universite</option>
                  <option value="Centre de formation">
                    Centre de formation
                  </option>
                  <option value="Institut superieure">
                    Institut superieure
                  </option>
                  <option value="Ecole de formation professionnelle">
                    Ecole de formation professionnelle
                  </option>
                </select>

                <small className="helper-text form-tex text-red-500">
                  {formik.touched.school_type && formik.errors.school_type}
                </small>
              </div>
              <div className="field leading-none my-2">
                <label className="leading-none font-bold" for="begin">
                  Debut des inscritions
                </label>
                <input
                  type="date"
                  className="mb-0 form-control"
                  name="begin_inscription"
                  value={formik.values.begin_inscription}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.begin_inscription &&
                    Boolean(formik.errors.begin_inscription)
                  }
                />

                <small className="helper-text form-tex text-red-500">
                  {formik.touched.begin_inscription &&
                    formik.errors.begin_inscription}
                </small>
              </div>
              <div className="field leading-none my-2">
                <label
                  className="leading-none font-bold"
                  htmlFor="admission_type"
                >
                  Type d'admission
                </label>
                <select
                  id="admission_type"
                  name="admission_type"
                  className="form-selec"
                  value={formik.values.admission_type}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.admission_type &&
                    Boolean(formik.errors.admission_type)
                  }
                >
                  <option value="sur concours">Concours</option>
                  <option value="test d'aptitude">Test d'aptitude</option>
                  <option value="Orientation etat">Orientation etat</option>
                  <option value="admission simple">Admission simple</option>
                  <option value="etude de dossier">Etude de dossier</option>
                </select>

                <small className="helper-text form-text text-sm text-red-500">
                  {formik.touched.admission_type &&
                    formik.errors.admission_type}
                </small>
              </div>
              <div className="field leading-none my-2">
                <label
                  className="leading-none font-bold"
                  htmlFor="inscription_cost"
                >
                  Cout d'admission
                </label>
                <input
                  type="number"
                  id="inscription_cost"
                  className="mb-0 form-control"
                  name="inscription_cost"
                  value={formik.values.inscription_cost}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.inscription_cost &&
                    Boolean(formik.errors.inscription_cost)
                  }
                />
                <small className="helper-text form-tex text-red-500">
                  {formik.touched.inscription_cost &&
                    formik.errors.inscription_cost}
                </small>
              </div>
              <div className="leading-none my-3">
                <label className="leading-none font-bold" for="begin">
                  Cout de la scolarite
                </label>
                <input
                  type="number"
                  className="mb-0 form-control"
                  name="school_pay"
                  value={formik.values.school_pay}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.school_pay &&
                    Boolean(formik.errors.school_pay)
                  }
                />
                <div className="flex-column">
                  <small className="title">*Montant approximatif moyen</small>
                  <small className="helper-text form-text text-sm text-red-500">
                    {formik.touched.school_pay && formik.errors.school_pay}
                  </small>
                </div>
              </div>
              <legend className=" font-bold text-xl">
                {' '}
                <h2>Filieres</h2>{' '}
              </legend>
              <div className="my-3 row">
                <div className="col-lg-4 col-sm-6 col-xs-6 my-2 text-sm">
                  <h2 className="text-muted mb-0">Sc. et Techniques</h2>
                  <div class="form-check">
                    <label
                      className="font-normal form-check-label"
                      HtmlFor="mathematiques"
                    >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Mathematiques"
                        id="mathematiques"
                        onClick={handleInput2}
                      />
                      Mathematiques{' '}
                    </label>
                  </div>
                  <div className="form-check">
                    <label
                      className="form-check-label font-normal"
                      Htmlfor="electro"
                    >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Electro Technique"
                        onClick={handleInput2}
                        id="electro"
                      />
                      E. Technique{' '}
                    </label>
                  </div>

                  <div className="form-check">
                    <label
                      className="form-check-label font-normal"
                      Htmlfor="electromeca"
                    >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Electro Mecanique"
                        onClick={handleInput2}
                        id="electomeca"
                      />
                      E. mecanique{' '}
                    </label>
                  </div>

                  <div className="form-check">
                    <label
                      className="form-check-label font-normal"
                      Htmlfor="Mecanique"
                    >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Mecanique"
                        onClick={handleInput2}
                        id="Mecanique"
                      />
                      Mecanique{' '}
                    </label>
                  </div>

                  <div className="form-check">
                    <label
                      className="form-check-label font-normal"
                      Htmlfor="Electronique"
                    >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Electronique"
                        name="Electronique"
                        onClick={handleInput2}
                        id="Electronique"
                      />
                      Electronique{' '}
                    </label>
                  </div>

                  <div className="form-check">
                    <label
                      className="form-check-label font-normal"
                      Htmlfor="geniecivil"
                    >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Genie civil"
                        onClick={handleInput2}
                        id="Geniecivil"
                      />
                      Genie civil{' '}
                    </label>
                  </div>

                  <div className="form-check my-0">
                    <label
                      className="form-check-label"
                      Htmlfor="flexCheckDefault"
                    >
                      {' '}
                      <input
                        class="form-check-input leading-none"
                        type="checkbox"
                        value="Genie civil"
                        onClick={handleInput2}
                        id="Genie civil"
                      />
                      Genie civil{' '}
                    </label>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6 col-xs-6 text-sm ">
                  <h2 className="text-muted mb-0">
                    Lettre et Sciences Humaines
                  </h2>

                  <div class="form-check">
                    <label
                      className="form-check-label font-normal"
                      HtmlFor="philosophie"
                    >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Philosophie"
                        onClick={handleInput2}
                        id="philosophie"
                      />
                      Philosophie{' '}
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      onClick={handleInput2}
                      value="Histoire"
                      id="histoire"
                    />
                    <label className="form-check-label" Htmlfor="histoire">
                      Histoire{' '}
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="Geographie"
                      onClick={handleInput2}
                      id="Geographie"
                    />
                    <label className="form-check-label" Htmlfor="geographie">
                      Geographie{' '}
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="Francais"
                      onClick={handleInput2}
                      id="Francais"
                    />
                    <label className="form-check-label " Htmlfor="fr">
                      Francais{' '}
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="Sociologie"
                      onClick={handleInput2}
                      id="Sociologie"
                    />
                    <label className="form-check-label" Htmlfor="sociologie">
                      Sociologie{' '}
                    </label>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6 col-xs-6 text-sm">
                  <h2 className="text-muted mb-0">Sciences juridiques</h2>

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      onClick={handleInput2}
                      value="Histoire du Droit"
                      id="Histoire du Droit"
                    />
                    <label
                      className="font-normal text-sm form-check-label"
                      HtmlFor="Histoire du Droit"
                    >
                      Histoire du Droit{' '}
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="Droit public"
                      id="Droit public"
                    />
                    <label
                      className="form-check-label font-normal"
                      Htmlfor="Droit public"
                    >
                      Droit public{' '}
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="Droit prive"
                      id="Droit prive"
                    />
                    <label
                      className="form-check-label font-normal"
                      Htmlfor="Droit prive"
                    >
                      Droit prive{' '}
                    </label>
                  </div>

                  <div className="form-check ">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="Science politique"
                      id="Science politique"
                    />
                    <label
                      className="form-check-label font-normal"
                      Htmlfor="Science politique"
                    >
                      Science politique{' '}
                    </label>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6 col-xs-6 text-sm">
                  <h2 className="text-muted mb-0">Sciences Gestion</h2>
                  <div class="form-check">
                    {' '}
                    <label className="font-normal text-sm form-check-label">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Comptabilite"
                        onClick={handleInput2}
                        id="Comptabilite"
                      />
                      Comptabilite{' '}
                    </label>
                  </div>
                  <div className="form-check my-0">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      onClick={handleInput2}
                      value="Commerce international"
                      id="Commerce"
                    />
                    <label>Commerce inter.</label>
                  </div>

                  <div className="form-check my-0">
                    <label>
                      {' '}
                      <input
                        class="form-check-input"
                        type="checkbox"
                        onClick={handleInput2}
                        value="Economie"
                        id="Economie"
                      />
                      Economie{' '}
                    </label>
                  </div>
                  <div className="form-check">
                    <label
                      className="form-check-label font-normal"
                      Htmlfor="Droit public"
                    >
                      {' '}
                      <input
                        class="form-check-input"
                        type="checkbox"
                        onClick={handleInput2}
                        value="Droit public"
                        id="Droit public"
                      />
                      Droit publics{' '}
                    </label>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-xs-6 text-sm">
                  <h2 className="text-muted mb-0">NTIC</h2>
                  <div class="form-check">
                    <label
                      className="font-normal form-check-label"
                      HtmlFor="Genie logiciel"
                    >
                      {' '}
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Genie logiciel"
                        id="Genie logiciel"
                      />
                      Genie logiciel{' '}
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="Big data"
                      onClick={handleInput2}
                      name="Big data"
                      id="Big"
                    />
                    <label class="form-check-label" for="Big">
                      Big Data{' '}
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="Reseax et telecom"
                      value="Reseaux et Telecom"
                      onClick={handleInput2}
                      id="Reseaux"
                    />
                    <label className="form-check-label" Htmlfor="Reseaux">
                      Reseaux et Tel.{' '}
                    </label>
                  </div>

                  <div className="form-check">
                    <label
                      className="form-check-label font-normal"
                      Htmlfor="infographie"
                    >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Infographie"
                        onClick={handleInput2}
                        id="infographie"
                      />
                      Infographie{' '}
                    </label>
                  </div>
                </div>
              </div>  <button
              type="submit"
              onSubmit={formik.handleSubmit}
              className="btn bg-blue-400    font-bold button btn-block"
            >
              Creer le compte
            </button>
            </fieldset>

          
          </form>
        </div>
      </div>
      </div>
    </>
  )
}
