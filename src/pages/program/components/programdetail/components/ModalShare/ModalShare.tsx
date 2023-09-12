import React, { useState } from "react";

import { Input, Modal } from "antd";

import { Controller, useForm } from "react-hook-form";

import { MultiSelect } from "react-multi-select-component";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { onShareApi } from "./api";
import { notify } from "utils/common";

type Props = {
  isOpenModalShare: boolean;
  handleCloseModal: () => void;
  itemDetails?:object
};

const validationSchema = Yup.object().shape({
  email: Yup.array().of(Yup.string().email('Email is valid')).required("Email is required"),
});



const ModalShare = (props: Props) => {
  const { isOpenModalShare, handleCloseModal,itemDetails } = props;

  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    mode: "all",
    criteriaMode: "all",
    resolver: yupResolver(validationSchema),
  });

  const [selected, setSelected] = useState([]);

  const { mutate: onShare } = useMutation(onShareApi, {
    onSuccess: (data) => {
      handleCloseModal()
      return notify("Share Success ", "success");
    },
    onError: () => {
      return notify("An error occurred, please try again ", "error");
    },
  });


  const handleShareToGmail =  (data:any) => {

    const newDataRequest = {
      ...itemDetails,
      email:data?.email,

    }

    onShare(newDataRequest)
  }

  const handleSelectChange = (selectedOption:any) => {
    const options = [ ]

    const newSelectedValues = selectedOption.map((option: any) => ({
      label:option.label,
      value:option.value
    }));
    for(var i = 0; i< newSelectedValues.length; i++) {
      options.push(newSelectedValues[i].value)
        }
    // Cập nhật mảng selectedVales với các giá trị đã chọn
    setValue('email',options,{ shouldValidate: true })
    setSelected(newSelectedValues);

  }



  return (
    <div>
      <Modal
        title="Share To Gmail"
        open={isOpenModalShare}
        onOk={handleSubmit(handleShareToGmail)}
        onCancel={handleCloseModal}
      >
        <Controller
          name="email"
          control={control}
          render={({ field  }) => {
            return (
              <div className="form-group">
                <label htmlFor="name">Email: </label>
                <div className="form-field">
                  <div className="select-wrap">
                  <MultiSelect
                    {...field}
                    options={selected || []}
                    value={selected}
                    labelledBy='Select Reason'
                    onChange={handleSelectChange}
                    // isMulti={true}
                    className='z-2'
                    // isSearchable={true}
                    isCreatable={true}
                  />
                  </div>
                  {errors.email &&  (
                    <p
                      style={{ color: " #FFCC47" }}
                      className="text-sm text-red-600"
                    >
                      {errors.email.message}
                    </p>
                  )}
                  {Array.isArray(errors?.email) && errors?.email?.length > 0 && (
                     <p
                     style={{ color: " #FFCC47" }}
                     className="text-sm text-red-600"
                   >
                     {errors.email[0].message}
                   </p>
                  )}
                </div>
              </div>
            );
          }}
        />
      </Modal>
    </div>
  );
};

export default ModalShare;
