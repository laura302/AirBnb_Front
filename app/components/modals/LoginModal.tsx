'use client';

import Modal from "./Modal";

import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
    const loginModal = useLoginModal()

    const content = (
        <>
            <form className="space-y-4">
                <input placeholder="Your e-mail address" type="email" className="w-full h-[54px] border border-gray-300 px-4 rounded-xl"/>

                <input placeholder="Your password" type="password" className="w-full h-[54px] border border-gray-300 px-4 rounded-xl"/>

                <div className="p-5 bg-airbnb text-while rounded-xl opacity-80">
                    the error message
                </div>

                <CustomButton
                    label="Submit"
                    onClick={() => console.log('Text') }
                />
            </form>
        </>
    )

    return (
       <Modal
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="Log in"
            content={content}
        />
    )
}

export default LoginModal;