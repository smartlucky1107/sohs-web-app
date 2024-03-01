import React, { useState } from 'react';
import { PoweroffOutlined } from '@ant-design/icons';
import { DatePicker, Input, Radio, Select, Button } from 'antd';
 
const gender = [
    { label: 'Male', value: 'm' },
    { label: 'Female', value: 'f' },
];

export default function WorkersPopup(props) {
    const [loadings, setLoadings] = useState([]);
    const enterLoading = (index) => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
      });
      setTimeout(() => {
        setLoadings((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = false;
          return newLoadings;
        });
      }, 6000);
    };

    return (
        <section className='fixed top-0 left-0 flex justify-center items-center w-full h-full bg-[rgba(0,0,0,0.6)]'>
            <div className='w-full max-w-[800px] bg-white flex flex-col relative'>
                <div className='w-full' style={{
                    backgroundImage: 'url(/popup-bg.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}>
                    <h1 className="text-white text-xl sm:text-xl w-full h-full bg-[#0094f1a0] py-6 px-3 text-center">Write Personal Info</h1>
                </div>
                <div className='w-full p-6 flex flex-wrap gap-5 justify-center items-center'>
                    <Input size="large" placeholder="Name" style={{
                        width: '40%'
                    }} />
                    <Input size="large" placeholder="Job title" style={{
                        width: '40%'
                    }} />
                    <Input size="large" placeholder="EMPO" style={{
                        width: '40%'
                    }} />
                    <Input size="large" placeholder="Experience (Years)" style={{
                        width: '40%'
                    }} />
                    <DatePicker placeholder={'DOB'} size={'large'} style={{
                        width: '40%'
                    }} />
                    <DatePicker placeholder={'Date'} size={'large'} style={{
                        width: '40%'
                    }} />
                    <Input size="large" placeholder="Years PJ" style={{
                        width: '40%'
                    }} />
                    <Input size="large" placeholder="OCC Hist" style={{
                        width: '40%'
                    }} />
                    <Select
                      defaultValue="Dept" 
                      style={{
                        width: '40%'
                      }}
                      options={[
                      ]}
                    />
                    <Select
                      defaultValue="NRIC/FIN" 
                      style={{
                        width: '40%'
                      }}
                      options={[
                      ]}
                    />
                    <Select
                      defaultValue="IHDinf" 
                      style={{
                        width: '40%'
                      }}
                      options={[
                      ]}
                    />
                    <Select
                      defaultValue="IHDdiag" 
                      style={{
                        width: '40%'
                      }}
                      options={[
                      ]}
                    />
                    <Select
                      defaultValue="Statutory" 
                      style={{
                        width: '40%'
                      }}
                      options={[
                      ]}
                    />
                    <Select
                      defaultValue="Notify" 
                      style={{
                        width: '40%'
                      }}
                      options={[
                      ]}
                    />
                    <Radio.Group options={gender} optionType="button" style={{
                        width: '40%'
                    }} />
                    <br />
                    <br />
                    <Button style={{ backgroundColor: '#1677ff' }} size='large' type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
                      Submit
                    </Button>
                </div>
                <button onClick={() => props.setPopupState(null)} className="absolute top-[10px] right-[15px] text-white">
                    X
                </button>
            </div>
        </section>
    )
}