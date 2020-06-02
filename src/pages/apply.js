import React, { useState } from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Container from '../components/Container';
import { Formik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components'
import CityAutocomplete from '../components/CityAutocomplete'

import { StyledLabel, StyledInput, StyledSelect } from '../components/InputElems'

const FormikTextInput = ({ title, name, formik }) => (
    <StyledLabel>
        {title}
        {formik.touched[name] && formik.errors[name] ? (
            <span style={{color: 'red'}}> *{formik.errors[name]}</span>
            ) : null}
        <StyledInput id={name} width='4' {...formik.getFieldProps(name)} />
    </StyledLabel>
)

const FormikSelect = ({ title, name, formik, children }) => (
    <StyledLabel>
        {title}
        <StyledSelect id={name} width='4' {...formik.getFieldProps(name)}>
            {children}
        </StyledSelect>
    </StyledLabel>
)

const GrowingForm = styled.div`
    height: ${props => props.open ? '80vh' : '0px'};
    overflow: hidden;
    transition: all 1s ease-in-out;
    margin-left: 1rem;
`


export default () => {
    return (
        <Layout>
            <Banner>
                <h1>Apply for Membership</h1>
            </Banner>
            <Container>
                <CityAutocomplete/>
                <Formik
                    initialValues={{
                        type: 0,
                        applicant: '',
                        organization: '',
                    }}
                    validationSchema={yup.object({
                        applicant: yup.string()
                        .required('required'),
                    })}
                >
                    {formik => (
                        <>
                            <FormikSelect
                                title="Applying on behalf of: "
                                name="type"
                                formik={formik}
                            >
                                <option value="0" disabled selected>Select your option</option>
                                <option value="1">Myself</option>
                                <option value="2">My Family</option>
                                <option value="3">A community of Heathens</option>
                                <option value="4">An organization</option>
                            </FormikSelect>
                            <hr/>
                            <GrowingForm open={formik.values.type > 0}>
                                <FormikTextInput
                                    title="Applicant Name"
                                    name="applicant"
                                    formik={formik}
                                />
                                <FormikTextInput
                                    title="Location"
                                    name="location"
                                    formik={formik}
                                />
                                <FormikTextInput
                                    title="Email"
                                    name="email"
                                    formik={formik}
                                />
                                {formik.values.type > 2 ? (
                                    <>
                                        <FormikTextInput
                                            title={`Name of ${formik.values.type == 3 ? "Community" : "Organization"}`}
                                            name="orgName"
                                            formik={formik}
                                        />
                                        <FormikSelect
                                            title={`Size of ${formik.values.type == 3 ? "Community" : "Organization"} (approximately)`}
                                            name="size"
                                            formik={formik}
                                        >
                                            <option value='5'>5</option>
                                            <option value='10'>10</option>
                                            <option value='15'>15</option>
                                            <option value='20'>20</option>
                                            <option value='25'>25</option>
                                            <option value='30'>30</option>
                                            <option value='35'>35</option>
                                            <option value='40'>40</option>
                                            <option value='45'>45</option>
                                            <option value='50'>50</option>
                                            <option value='55'>>50</option>
                                        </FormikSelect>
                                        {formik.values.type == 4 ? (
                                            <FormikTextInput
                                                title="Tradition"
                                                name="tradition"
                                                formik={formik}
                                            />): null 
                                        }
                                    </>
                                ) : null}
                                
                            </GrowingForm>
                        </>
                    )}
                </Formik>
            </Container>
        </Layout>
    )
}