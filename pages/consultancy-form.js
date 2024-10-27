/* eslint-disable react/jsx-no-duplicate-props */
import Head from 'next/head';
import React from 'react';
import { useState } from 'react';
import Footer from '../components/Footer';
import CompanyForm from '../components/Form/CompanyForm';
import IndividualForm from '../components/Form/IndividualForm';
import PageLayout from '../components/PageLayout/PageLayout';

const ConsultancyForm = () => {

    const [ typeIndividual , setTypeIndividual ] = useState(true);
    console.log(typeIndividual);

    return (
        <>
            <Head>
                <title>Iuris Lex V&C</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <PageLayout name='Sobre Nosotros' />
            <div className="container paddingY">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className='text-center'>Consulta</h2>
                        <div className="d-flex justify-content-center align-items-center mt-4">
                            <div className="form-check">
                                <input onChange={ () => setTypeIndividual(true)} className="form-check-input" type="radio"  name="checkReqType" id="asAIndividual" />
                                <label className="form-check-label" htmlFor="asAIndividual">
                                    Persona
                                </label>
                            </div>
                            <div className="form-check ms-4">
                                <input   onChange={ () => setTypeIndividual(false)} className="form-check-input" type="radio" name="checkReqType" id="asACompany" />
                                <label className="form-check-label" htmlFor="asACompany">
                                    Compañia
                                </label>
                            </div>
                        </div>
                    </div>
                    {
                        typeIndividual ? <IndividualForm /> :  <CompanyForm />
                    }
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ConsultancyForm;