import React, {useState} from "react";
import {PageHeader} from "../../components/PageHeader";
import {Breadcrumb, Form, InputGroup} from "react-bootstrap";
import Link from "next/link";
import {useRouter} from "next/router";
import styles from "./Checkout.module.scss"
import {useCartContext} from "../../contexts/CartContext";
import {IoBagCheck, IoCall, IoCard, IoCheckmarkCircleOutline, IoClipboard, IoPerson} from "react-icons/io5";
import {useForm} from "react-hook-form";
import {ConfirmSection} from "../../components/ConfirmSection";
import {useAlertContext} from "../../contexts/AlertContext";

const BD_PHONE_REGEX = /^01[3456789][0-9]{8}\b/g;

type FORM_DATA = {
    name: string,
    phone: string,
    address: string,
    note: string
}

const FIELD_NAMES: FORM_DATA = {
    name: "name",
    phone: "phoneNumber",
    address: "address",
    note: "specialNote"
}

export const Checkout = () => {
    const router = useRouter();
    const {storeId, deliveryMethod} =router.query;

    const {products, cartDispatch} = useCartContext();
    const {alertDispatch} = useAlertContext()
    const {register, formState: {errors}, handleSubmit} = useForm();

    const [confirmed, setConfirmed] = useState(false);
    const [orderId, setOrderId] = useState('');

    const getError = (fieldName: string) => {
        let errorKey = Object.keys(errors).find(value => value === fieldName);
        if (errorKey) {
            return errors[errorKey].message;
        }
        return '';
    }

    const submitForm = (data: FORM_DATA) => {
        //backend api call
        console.log(data);
        //on success

        setConfirmed(true);
        setOrderId('#123ASDF12');
        alertDispatch({type: "show", content: {type: "success", message: "Order was successfully placed"}})
    }

    const onBrowseMoreClicked = () => {
        products.forEach(product => {
            cartDispatch({type: "remove", id: product.id})
        })
        router.push(`/${storeId}/store`).then();
    }

    let x = 5;

    return (
        <div className="mx-0 mx-md-auto col-12 col-md-10 col-lg-8 col-xl-6 mt-3">
            <PageHeader/>

            <Breadcrumb className="mt-4">
                <Breadcrumb.Item><Link href={`/${storeId}/store`}>STORE</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link href={`/${storeId}/cart`}>CART</Link></Breadcrumb.Item>
                <Breadcrumb.Item active>CHECKOUT</Breadcrumb.Item>
            </Breadcrumb>

            <div className={`mt-5 mx-auto  ${styles.checkoutContainer}`}>
                {
                    x ? (
                        <>
                            <h5 className="primary font-weight-bold">
                                {
                                    confirmed && orderId ? `ORDER CONFIRMED ${orderId}` : ' ORDER INFORMATION'
                                }

                            </h5>
                            <div className="primary">
                                {
                                    confirmed && orderId ? 'CONGRATULATIONS! YOUR ORDER HAS BEEN PLACED' : 'PLEASE FILL OUT THE INFORMATION'
                                }
                            </div>

                            <Form className="mt-4" onSubmit={handleSubmit(submitForm)}>
                                <div className="d-flex flex-column flex-sm-row justify-content-around">
                                    <div>
                                        <div className="mb-3">
                                            <InputGroup className="mb-2">
                                                <Form.Control
                                                    placeholder="John Doe"
                                                    aria-label="name"
                                                    aria-describedby="person-icon"
                                                    {...register(FIELD_NAMES.name, {required: "Name is required"})}
                                                    isInvalid={FIELD_NAMES.name in errors}
                                                />
                                                <InputGroup.Text id="person-icon">
                                                    <IoPerson size={18} className="primary"/>
                                                </InputGroup.Text>
                                                <Form.Control.Feedback type="invalid">
                                                    {
                                                        getError(FIELD_NAMES.name)
                                                    }
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                            <div className="text-muted">Name</div>
                                        </div>
                                        <div className="mb-3">
                                            <InputGroup className="mb-2">
                                                <Form.Control
                                                    placeholder="01XX XXXXXXX"
                                                    aria-label="name"
                                                    aria-describedby="phone-icon"
                                                    {...register(FIELD_NAMES.phone, {
                                                        required: "Phone Number is required", pattern: {
                                                            value: BD_PHONE_REGEX,
                                                            message: "Enter a valid number"
                                                        }
                                                    })}
                                                    isInvalid={FIELD_NAMES.phone in errors}
                                                />
                                                <InputGroup.Text id="phone-icon">
                                                    <IoCall size={18} className="primary"/>
                                                </InputGroup.Text>
                                                <Form.Control.Feedback type="invalid">
                                                    {
                                                        getError(FIELD_NAMES.phone)
                                                    }
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                            <div className="text-muted">Phone</div>
                                        </div>
                                        <div className="mb-3">
                                            <InputGroup className="mb-2">
                                                <Form.Control
                                                    placeholder="Narnia"
                                                    aria-label="Address"
                                                    aria-describedby="address-icon"
                                                    {...register(FIELD_NAMES.address, {required: "Address is required"})}
                                                    isInvalid={FIELD_NAMES.address in errors}
                                                />
                                                <InputGroup.Text id="address-icon">
                                                    <IoCard size={18} className="primary"/>
                                                </InputGroup.Text>
                                                <Form.Control.Feedback type="invalid">
                                                    {
                                                        getError(FIELD_NAMES.address)
                                                    }
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                            <div className="text-muted">Address</div>
                                        </div>
                                        <div className="mb-3">
                                            <InputGroup className="mb-2">
                                                <Form.Control
                                                    placeholder="Call beforehand"
                                                    aria-label="special-note"
                                                    aria-describedby="note-icon"
                                                    {...register(FIELD_NAMES.note)}
                                                    isInvalid={FIELD_NAMES.note in errors}
                                                />
                                                <InputGroup.Text id="note-icon">
                                                    <IoClipboard size={18} className="primary"/>
                                                </InputGroup.Text>
                                                <Form.Control.Feedback type="invalid">
                                                    {
                                                        getError(FIELD_NAMES.note)
                                                    }
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                            <div className="text-muted">Special Note</div>
                                        </div>
                                    </div>
                                    <div>
                                        <ConfirmSection deliveryMethod={deliveryMethod}/>
                                        {
                                            confirmed && orderId ? (
                                                <div className="mb-3">
                                                    <InputGroup className="mb-2">
                                                        <Form.Control
                                                            value={orderId}
                                                            aria-label="orderId"
                                                            aria-describedby="bag-icon"
                                                        />
                                                        <InputGroup.Text id="bag-icon">
                                                            <IoBagCheck size={18} className="primary"/>
                                                        </InputGroup.Text>
                                                    </InputGroup>
                                                    <div className="text-muted">Name</div>
                                                </div>
                                            ) : (
                                                <div className="mb-3 d-flex justify-content-end">
                                                    <button type="submit"
                                                            className="btn colored-button d-flex align-items-center">
                                                        <IoCheckmarkCircleOutline size={25} className="pr-2"/>
                                                        <span>CONFIRM ORDER</span>
                                                    </button>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                                {
                                    confirmed && orderId && (
                                        <div className="d-flex flex-column align-items-center">
                                            <div className="primary mb-2">SAVE ORDER ID FOR FUTURE REFERENCE</div>
                                            <button type="submit" className="btn colored-button" onClick={onBrowseMoreClicked}>
                                                BROWSE FOR MORE PRODUCTS
                                            </button>
                                        </div>
                                    )
                                }
                            </Form>
                        </>
                    ) : (
                        <h3 className="text-center">You haven&apos;t added any products to cart.{' '}
                            <Link href={`/${storeId}/store`}>
                                <span className="primary" role="button">Go to store</span>
                            </Link>
                        </h3>
                    )
                }
            </div>

        </div>
    )
}

export default Checkout;
