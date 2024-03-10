import { DatePicker, Input, Radio } from "antd";
import AirConduction from "./charts/airconduction";
import BoneConduction from "./charts/boneconduction";
import RightTable from "./tables/right";
import LeftTable from "./tables/left";

export default function TestsResult() {
    const airconddata = {
        labels: ['250Hz', '500Hz', '1kHz', '1kHz', '4kHz', '8kHz'],
        values: [65, 59, 80, 81, 56, 55, 40],
      };
    
    const boneconddata = {
        labels: ['250Hz', '500Hz', '1kHz', '1kHz', '4kHz', '8kHz'],
        values: [65, 59, 80, 81, 56, 55, 40],
      };
    

    return (
        <section className="flex w-full flex-col justify-center items-center py-10 px-4">
            <div className="w-full max-w-[1280px] flex flex-col justify-center items-center gap-7 ">
                <div className="w-full flex gap-4">
                    <p className=" text-nowrap">Company Address:</p>
                    <Input placeholder="Company Address" />
                </div>
                <div className="w-full flex justify-start flex-wrap gap-4">
                    <div className="flex gap-4">
                        <p className=" text-nowrap">Name:</p>
                        <Input placeholder="Name" />
                    </div>
                    <div className="flex gap-4">
                        <p className=" text-nowrap">NRIC/FIN:</p>
                        <Input placeholder="NRIC/FIN" />
                    </div>
                    <div className="flex gap-4">
                        <p className=" text-nowrap">DOB:</p>
                        <DatePicker placeholder="DOB" />
                    </div>
                    <div className="flex gap-4">
                        <p className=" text-nowrap">Sex:</p>
                        <Input placeholder="Sex" />
                    </div>
                </div>
                <div className="w-full flex justify-start flex-wrap gap-4">
                    <div className="flex gap-4">
                        <p className=" text-nowrap">Emp. No.:</p>
                        <Input placeholder="Emp. No." />
                    </div>
                    <div className="flex gap-4">
                        <p className=" text-nowrap">Date Joined:</p>
                        <Input placeholder="Date Joined" />
                    </div>
                    <div className="flex gap-4">
                        <p className=" text-nowrap">Job Title:</p>
                        <Input placeholder="Job Title" />
                    </div>
                </div>
                <div className="w-full flex justify-start flex-wrap gap-4">
                    <div className="flex gap-4">
                        <p className=" text-nowrap">Years of Exposure:</p>
                        <Input placeholder="Years of exposure" />
                        <p className=" text-nowrap">(including previous jobs)</p>
                    </div>
                    <div className="flex gap-4">
                        <p className=" text-nowrap">Dept:</p>
                        <Input placeholder="Dept" />
                    </div>
                    <div className="flex gap-4">
                        <p className=" text-nowrap">IHD:</p>
                        <Input placeholder="IHD" />
                    </div>
                </div>
                <div className="w-full flex justify-start flex-wrap gap-4">
                    <div className="flex gap-4">
                        <p className=" text-nowrap">Does the employees wear hearing protector when exposed to excessive noise ?</p>
                        <Radio.Group defaultValue={true}>
                          <Radio value={true}>Yes</Radio>
                          <Radio value={false}>No</Radio>
                        </Radio.Group>
                    </div>
                    <div className="flex gap-4">
                        <p className=" text-nowrap">Was the employee counselled on the usage of hearing protectors ?</p>
                        <Radio.Group defaultValue={true}>
                          <Radio value={true}>Yes</Radio>
                          <Radio value={false}>No</Radio>
                        </Radio.Group>
                    </div>
                </div>
                <div className="w-full grid grid-cols-2  gap-4">
                    <div >
                        <p className=" text-nowrap">Right</p>
                        <RightTable />
                    </div>
                    <div >
                        <p className=" text-nowrap">Left</p>
                        <LeftTable />
                    </div>
                </div>
                <div className="w-full flex justify-start flex-col flex-wrap gap-4">
                    <h3 className="font-bold"><span className="mr-6">AC: Air Conduction</span><span className="mr-6">BC:Bone Conduction</span></h3>
                    <p>Under the above regulations BC should be done when AC is focused Abnormal</p>
                    <div className="flex gap-4">
                        <p className=" text-nowrap">Name and signature of the person conducting audiomentary:</p>
                        <Input placeholder="Name and signature" />
                    </div>
                    <div className="flex gap-4 max-w-[300px]">
                        <p className=" text-nowrap">Date Tested</p>
                        <Input placeholder="Date Tested" />
                    </div>
                </div>
                <div className="w-full grid grid-cols-2 justify-start  gap-4">
                    <div>
                        <p className=" text-nowrap">Air Conduction Test</p>
                        <AirConduction data={airconddata} />
                    </div>
                    <div>
                        <p className=" text-nowrap">Bone Conduction Test</p>
                        <BoneConduction data={boneconddata} />
                    </div>
                </div>
                
                <div className="w-full flex justify-start flex-col flex-wrap gap-4">
                    <h3 className="font-bold">To be completed DWD:</h3>
                    <div className="grid grid-cols-2 w-1/2" >
                        <p>Autoscopic Examination Finding</p>
                        <div>
                            <div className="flex gap-4 mb-4">
                                <p className=" text-nowrap">Right</p>
                                <Input placeholder="Right" />
                            </div>
                            <div className="flex gap-4">
                                <p className=" text-nowrap">Left</p>
                                <Input placeholder="Left" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-start flex-col flex-wrap gap-4">
                    <h3 className="font-bold">Otoscopy:</h3>
                    <div className="grid grid-cols-2 gap-4 max-w-3xl">
                    <div className="flex gap-4 max-w-[300px]">
                        <p className=" text-nowrap">Right</p>
                        <Input placeholder="Right" />
                    </div>
                    <div className="flex gap-4 max-w-[300px]">
                        <p className=" text-nowrap">Left</p>
                        <Input placeholder="Left" />
                    </div>
                    <div className="flex gap-4 max-w-[300px]">
                        <p className=" text-nowrap">Norma</p>
                        <Input placeholder="Norma" />
                    </div>
                    <div className="flex gap-4 max-w-[300px]">
                        <p className=" text-nowrap">Wax Present</p>
                        <Input placeholder="Wax Present" />
                    </div>
                    <div className="flex gap-4 max-w-[300px]">
                        <p className=" text-nowrap">Scarred TM</p>
                        <Input placeholder="Scarred TM" />
                    </div>
                    <div className="flex gap-4 max-w-[300px]">
                        <p className=" text-nowrap">TM Perforatio</p>
                        <Input placeholder="TM Perforatio" />
                    </div>

                    </div>
                </div>
                
                <div className="w-full flex flex-wrap gap-7 font-semibold">
                    <div className="flex flex-wrap gap-12">
                        <p>Diagnosis:</p>
                        <Radio.Group className="flex-col flex"  defaultValue="Normal" >
                            <Radio className="my-2" value="Normal">1. Normal</Radio>
                            <Radio className="my-2" value="Slight hearing loss">2. Slight hearing loss</Radio>
                            <Radio className="my-2" value="Causes other than noise">3. Causes other than noise</Radio>
                            <Radio className="my-2" value="NID Suspect">4. NID Suspect</Radio>
                            <Radio className="my-2" value="NID Early">5. NID Early</Radio>
                            <Radio className="my-2" value="NID Advance">6. NID Advance</Radio>
                        </Radio.Group>
                    </div>
                    <div className="flex flex-wrap gap-12">
                        <p>Action Plans:</p>
                        <Radio.Group className="flex-col flex" defaultValue="Notify OSHD, MOM">
                            <Radio className="my-2" value="Notify OSHD, MOM">1. Notify OSHD, MOM</Radio>
                            <Radio className="my-2" value="Review (Date)">2. <div className="inline-flex items-center">Review <Input placeholder="Right" className="mx-2"/> (Date)</div> </Radio>
                            <Radio className="my-2" value="Refer ENT Specialist">3. Refer ENT Specialist</Radio>
                            <Radio className="my-2" value="No Action">4. No Action</Radio>
                            <Radio className="my-2" value="Other">5. <div className="inline-flex items-center" >Other <Input placeholder="Right" /></div></Radio>
                        </Radio.Group>
                    </div>
                </div>
                
                
                <div className="w-full flex justify-start flex-wrap gap-4 font-semibold">
                    <p className=" text-nowrap">Certification of fitness to work in noisy environment</p>
                    <Radio.Group defaultValue={true}>
                      <Radio value={true}>Yes</Radio>
                      <Radio value={false}>No</Radio>
                    </Radio.Group>
                </div>
            </div>
        </section>
    )
}