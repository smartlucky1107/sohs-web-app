import React, { useState } from 'react';
import { DatePicker, Input, Radio, Select, Button } from 'antd';
import axios from 'axios';
 
const gender = [
    { label: 'Male', value: 'm' },
    { label: 'Female', value: 'f' },
];

export default function TestsPopup(props) {
    const [loadings, setLoadings] = useState([]);
    const [formData, setFormData] = useState({}); // State to hold form data
    
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

    const isFinUnique = async (fin) => {
      try {
          const response = await axios.get(`/api/tests/checkFinUnique?fin=${fin}`); // Replace with your API endpoint to check 'fin' uniqueness
          return response.data.isUnique; // Assuming the response contains a boolean indicating uniqueness
      } catch (error) {
          console.error('Failed to check uniqueness of fin:', error);
          return false; // Assuming uniqueness check fails
      }
    };
    
    const handleSubmit = async () => {
      try {
          const isUnique = await isFinUnique(formData.fin);
          if (!isUnique) {
              // 'fin' value is not unique, handle the case by showing an error message
              alert('FIN already exists. Please enter a unique FIN.');
              return;
          }
          await axios.post('/api/tests/addworker', formData); // Send POST request to API
          // Reset form data or handle success
      } catch (error) {
          // Handle error
          console.error('Failed to submit data:', error);
      }
    };

    // Function to handle form input changes
    const handleInputChange = (key, value) => {
        setFormData(prevData => ({
            ...prevData,
            [key]: value
        }));
    };

    return (
        <section className='fixed top-0 left-0 flex justify-center items-center w-full h-full bg-[rgba(0,0,0,0.6)]'>
            <div className='w-full max-w-[800px] bg-white flex flex-col relative'>
                <div className='w-full' style={{
                    backgroundImage: 'url(/popup-bg.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}>
                    <h1 className="text-white text-xl sm:text-xl w-full h-full bg-[#0094f1a0] py-6 px-3 text-center">Add Test Info</h1>
                </div>
                <div className='w-full p-6 flex flex-wrap gap-5 justify-center items-center overflow-y-scroll max-h-[500px]'>
                    <Input size="large" placeholder="NRIC/FIN" style={{
                        width: '40%'
                    }} onChange={(e) => handleInputChange('fin', e.target.value)} />
                    <Input size="large" placeholder="EMPNO" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('empno', e.target.value)} />
                    <Input size="large" type='number' placeholder="Yrs_Exp"
                      onChange={(e) => handleInputChange('exp', e.target.value)} style={{
                        width: '40%'
                    }} />
                    <Select
                      defaultValue="Statutory" 
                      style={{
                        width: '40%'
                      }}
                      options={[
                        { value: 'TRUE', label: <span>TRUE</span> },
                        { value: 'FALSE', label: <span>FALSE</span> },
                      ]}
                      onChange={(selectedValue) => handleInputChange('stat', selectedValue)}
                    />
                    <Select
                      defaultValue="Notify" 
                      style={{
                        width: '40%'
                      }}
                      options={[
                        { value: 'Yes', label: <span>Yes</span> },
                        { value: 'No', label: <span>No</span> },
                      ]}
                      onChange={(selectedValue) => handleInputChange('notify', selectedValue)}
                    />
                    <Select
                      defaultValue="IHDinf" 
                      style={{
                        width: '40%'
                      }}
                      options={[
                        { value: 'TRUE', label: <span>TRUE</span> },
                        { value: 'FALSE', label: <span>FALSE</span> },
                      ]}
                      onChange={(selectedValue) => handleInputChange('inf', selectedValue)}
                    />
                    <Select
                      defaultValue="IHDdiag" 
                      style={{
                        width: '40%'
                      }}
                      options={[
                        { value: 'NIDE-NOTIFIED', label: <span>NIDE-NOTIFIED</span> },
                        { value: 'ENT', label: <span>ENT</span> },
                      ]}
                      onChange={(selectedValue) => handleInputChange('diag', selectedValue)}
                    />
                    <Input size="large" placeholder="OCC_HIST" style={{
                        width: '40%'
                    }} onChange={(e) => handleInputChange('hist', e.target.value)} />
                    <Select
                      defaultValue="Ear Discharge" 
                      style={{
                        width: '40%'
                      }}
                      options={[
                        { value: 'TRUE', label: <span>TRUE</span> },
                        { value: 'FALSE', label: <span>FALSE</span> },
                      ]}
                      onChange={(selectedValue) => handleInputChange('edisc', selectedValue)}
                    />
                    <Select
                      defaultValue="Ear Operation" 
                      style={{
                        width: '40%'
                      }}
                      options={[
                        { value: 'TRUE', label: <span>TRUE</span> },
                        { value: 'FALSE', label: <span>FALSE</span> },
                      ]}
                      onChange={(selectedValue) => handleInputChange('erop', selectedValue)}
                    />
                    <Select
                      defaultValue="Ringing Ears" 
                      style={{
                        width: '40%'
                      }}
                      options={[
                        { value: 'TRUE', label: <span>TRUE</span> },
                        { value: 'FALSE', label: <span>FALSE</span> },
                      ]}
                      onChange={(selectedValue) => handleInputChange('rine', selectedValue)}
                    />
                    <Select
                      defaultValue="Head or Ear" 
                      style={{
                        width: '40%'
                      }}
                      options={[
                        { value: 'TRUE', label: <span>TRUE</span> },
                        { value: 'FALSE', label: <span>FALSE</span> },
                      ]}
                      onChange={(selectedValue) => handleInputChange('hear', selectedValue)}
                    />
                    <Select
                      defaultValue="Ear Problem" 
                      style={{
                        width: '40%'
                      }}
                      options={[
                        { value: 'TRUE', label: <span>TRUE</span> },
                        { value: 'FALSE', label: <span>FALSE</span> },
                      ]}
                      onChange={(selectedValue) => handleInputChange('earp', selectedValue)}
                    />
                    <Select
                      defaultValue="Loud Noise Exposure" 
                      style={{
                        width: '40%'
                      }}
                      options={[
                        { value: 'TRUE', label: <span>TRUE</span> },
                        { value: 'FALSE', label: <span>FALSE</span> },
                      ]}
                      onChange={(selectedValue) => handleInputChange('lnexp', selectedValue)}
                    />
                    <Select
                      defaultValue="Medication" 
                      style={{
                        width: '40%'
                      }}
                      options={[
                        { value: 'TRUE', label: <span>TRUE</span> },
                        { value: 'FALSE', label: <span>FALSE</span> },
                      ]}
                      onChange={(selectedValue) => handleInputChange('medic', selectedValue)}
                    />
                    <Select
                      defaultValue="Military Service" 
                      style={{
                        width: '40%'
                      }}
                      options={[
                        { value: 'TRUE', label: <span>TRUE</span> },
                        { value: 'FALSE', label: <span>FALSE</span> },
                      ]}
                      onChange={(selectedValue) => handleInputChange('milser', selectedValue)}
                    />
                    <Select
                      defaultValue="MEdical Problem" 
                      style={{
                        width: '40%'
                      }}
                      options={[
                        { value: 'TRUE', label: <span>TRUE</span> },
                        { value: 'FALSE', label: <span>FALSE</span> },
                      ]}
                      onChange={(selectedValue) => handleInputChange('medicp', selectedValue)}
                    />
                    <Input size="large" placeholder="Med_Hist" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('medhist', e.target.value)} />
                    <Input size="large" placeholder="Other Info" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('othin', e.target.value)} />
                    <Select
                      defaultValue="Counsel" 
                      style={{
                        width: '40%'
                      }}
                      options={[
                        { value: 'TRUE', label: <span>TRUE</span> },
                        { value: 'FALSE', label: <span>FALSE</span> },
                      ]}
                      onChange={(selectedValue) => handleInputChange('counsel', selectedValue)}
                    />
                    <Select
                      defaultValue="Protect" 
                      style={{
                        width: '40%'
                      }}
                      options={[
                        { value: 'TRUE', label: <span>TRUE</span> },
                        { value: 'FALSE', label: <span>FALSE</span> },
                      ]}
                      onChange={(selectedValue) => handleInputChange('protect', selectedValue)}
                    />
                    <Input size="large" placeholder="Prototype" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('proto', e.target.value)} />
                    <Input size="large" placeholder="Profeq" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('profeq', e.target.value)} />
                    <Select
                      defaultValue="Demo" 
                      style={{
                        width: '40%'
                      }}
                      options={[
                        { value: 'TRUE', label: <span>TRUE</span> },
                        { value: 'FALSE', label: <span>FALSE</span> },
                      ]}
                      onChange={(selectedValue) => handleInputChange('demo', selectedValue)}
                    />
                    <Input size="large" placeholder="Cleanfreq" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('cleanfreq', e.target.value)} />
                    <Input size="large" placeholder="rearex" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('rearex', e.target.value)} />
                    <Input size="large" placeholder="learex" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('learex', e.target.value)} />

                    <Input size="large" placeholder="air_r1" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('air1', e.target.value)} />
                    <Input size="large" placeholder="air_r2" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('air2', e.target.value)} />
                    <Input size="large" placeholder="air_r3" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('air3', e.target.value)} />
                    <Input size="large" placeholder="air_r4" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('air4', e.target.value)} />
                    <Input size="large" placeholder="air_r5" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('air5', e.target.value)} />
                    <Input size="large" placeholder="air_r6" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('air6', e.target.value)} />
                    <Input size="large" placeholder="air_r7" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('air7', e.target.value)} />
                    <Input size="large" placeholder="air_r8" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('air8', e.target.value)} />
                    <Input size="large" placeholder="air_r9" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('air9', e.target.value)} />
                    <Input size="large" placeholder="air_r10" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('air10', e.target.value)} />
                    <Input size="large" placeholder="air_r11" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('air11', e.target.value)} />
                    <Input size="large" placeholder="air_r12" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('air12', e.target.value)} />
                    <Input size="large" placeholder="air_r13" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('air13', e.target.value)} />
                    <Input size="large" placeholder="air_r14" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('air14', e.target.value)} />
                    <Input size="large" placeholder="air_r15" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('air15', e.target.value)} />
                    <Input size="large" placeholder="air_r16" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('air16', e.target.value)} />
                    <Input size="large" placeholder="air_r17" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('air17', e.target.value)} />
                    <Input size="large" placeholder="air_r18" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('air18', e.target.value)} />
                    
                    <Input size="large" placeholder="bone_r1" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('bone1', e.target.value)} />
                    <Input size="large" placeholder="bone_r2" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('bone2', e.target.value)} />
                    
                    <Input size="large" placeholder="Tester" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('tester', e.target.value)} />
                    <Select
                      defaultValue="report" 
                      style={{
                        width: '40%'
                      }}
                      options={[
                        { value: 'TRUE', label: <span>TRUE</span> },
                        { value: 'FALSE', label: <span>FALSE</span> },
                      ]}
                      onChange={(selectedValue) => handleInputChange('report', selectedValue)}
                    />
                    <Input size="large" placeholder="certify" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('certify', e.target.value)} />
                    <Input size="large" placeholder="Action" style={{
                        width: '40%'
                    }}  onChange={(e) => handleInputChange('action', e.target.value)} />
                    <DatePicker placeholder={'Date_Tested'} size={'large'} style={{
                        width: '40%'
                    }} onChange={(selectedDate) => handleInputChange('dtest', selectedDate)} />
                    <Select
                      defaultValue="review1yr" 
                      style={{
                        width: '40%'
                      }}
                      options={[
                        { value: 'TRUE', label: <span>TRUE</span> },
                        { value: 'FALSE', label: <span>FALSE</span> },
                      ]}
                      onChange={(selectedValue) => handleInputChange('rev1y', selectedValue)}
                    />
                    <Select
                      defaultValue="review6mo" 
                      style={{
                        width: '40%'
                      }}
                      options={[
                        { value: 'TRUE', label: <span>TRUE</span> },
                        { value: 'FALSE', label: <span>FALSE</span> },
                      ]}
                      onChange={(selectedValue) => handleInputChange('rev6m', selectedValue)}
                    />
                    <Select
                      defaultValue="tonotify" 
                      style={{
                        width: '40%'
                      }}
                      options={[
                        { value: 'TRUE', label: <span>TRUE</span> },
                        { value: 'FALSE', label: <span>FALSE</span> },
                      ]}
                      onChange={(selectedValue) => handleInputChange('tontfy', selectedValue)}
                    />
                    <Select
                      defaultValue="Notified" 
                      style={{
                        width: '40%'
                      }}
                      options={[
                        { value: 'TRUE', label: <span>TRUE</span> },
                        { value: 'FALSE', label: <span>FALSE</span> },
                      ]}
                      onChange={(selectedValue) => handleInputChange('notfid', selectedValue)}
                    />

                    <br />
                    <br />
                </div>
                <div className='col-12 flex justify-center items-center p-4'>
                    <Button style={{ backgroundColor: '#1677ff' }} size='large' type="primary" loading={loadings[0]} onClick={handleSubmit}>
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