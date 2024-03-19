import dayjs from "dayjs";
import AirConduction from "./test-result/charts/airconduction";
import BoneConduction from "./test-result/charts/boneconduction";

const PrintTest = ({ airconddata, boneconddata, formData }) => {
  return (
    <div className="bg-white" id="section-to-print">
      <h1 className="font-bold text-4xl uppercase mb-5 text-center">
        SINGAPORE OCCUPATION HEALTH SERVICE PTE LTD
      </h1>
      <p className="text-xl font-medium text-center">
        Singapore Occupational Health Services Pte Ltd
      </p>
      <p className="text-xl font-medium text-center">
        16 Ayer Rajah Crescent, Tempco Technominium, #06-06B, Singapore 139955.
        Tel: 68725020, 67772829. Fax: 68725679.
      </p>

      <ul className="border-b-2 border-black pb-8 mb-8 mt-3">
        <li className="text-xl font-medium">
          Workspace Safety and Health Act 2006
        </li>
        <li className="text-xl font-medium">
          Workspace Safety and Health (Medical Examinations) Regulations 2011
        </li>
        <li className="text-xl font-medium">
          Workspace Safety and Health (NOISE) Regulations 2011
        </li>
      </ul>

      <div className="space-y-10">
        <div className="space-y-5">
          <div className="text-xl flex items-center gap-2">
            <label className="font-bold w-[180px]">Company Address:</label>
            <input
              className="border-b border-dashed border-black bg-transparent outline-none w-[calc(100%_-_180px)]"
              value={formData.company_address}
            />
          </div>

          <div className="flex items-center gap-5 flex-wrap">
            <div className="text-xl flex items-center gap-2">
              <label className="font-bold">Name:</label>
              <input
                className="border-b border-dashed border-black bg-transparent outline-none w-[300px]"
                value={formData.name}
              />
            </div>

            <div className="text-xl flex items-center gap-2">
              <label className="font-bold">NRIC/FIN:</label>
              <input
                className="border-b border-dashed border-black bg-transparent outline-none"
                value={formData.fin}
              />
            </div>

            <div className="text-xl flex items-center gap-2">
              <label className="font-bold">DOB:</label>
              <input
                className="border-b border-dashed border-black bg-transparent outline-none w-[195px]"
                value={
                  formData.dob &&
                  formData.dob !== "Invalid Date" &&
                  dayjs(formData.dob).format("DD/MM/YYYY")
                }
              />
            </div>

            <div className="text-xl flex items-center gap-2">
              <label className="font-bold">Sex:</label>
              <input
                className="border-b border-dashed border-black bg-transparent outline-none w-[30px]"
                value={formData.sex}
              />
            </div>

            <div className="text-xl flex items-center gap-2">
              <label className="font-bold">Emp. No:</label>
              <input
                className="border-b border-dashed border-black bg-transparent outline-none"
                value={formData.empno}
              />
            </div>

            <div className="text-xl flex items-center gap-2">
              <label className="font-bold">Date Joined:</label>
              <input
                className="border-b border-dashed border-black bg-transparent outline-none"
                value={
                  formData.date &&
                  formData.date !== "Invalid Date" &&
                  dayjs(formData.date).format("DD/MM/YYYY")
                }
              />
            </div>

            <div className="text-xl flex items-center gap-2">
              <label className="font-bold">Job Title:</label>
              <input
                className="border-b border-dashed border-black bg-transparent outline-none"
                value={formData.jobt}
              />
            </div>

            <div className="text-xl flex items-center gap-2">
              <label className="font-bold">Years of Exposure:</label>
              <input
                className="border-b border-dashed border-black bg-transparent outline-none w-[200px]"
                value={formData.yrs_exposure}
              />
            </div>

            <div className="text-xl flex items-center gap-2">
              <label className="font-bold">Dept:</label>
              <input
                className="border-b border-dashed border-black bg-transparent outline-none"
                value={formData.dept}
              />
            </div>

            <div className="text-xl flex items-center gap-2">
              <label className="font-bold">IHD:</label>
              <input
                className="border-b border-dashed border-black bg-transparent outline-none w-[278px]"
                value={formData.ihd}
              />
            </div>

            <div className="text-xl flex items-center gap-2">
              <label className="font-bold">
                Does the employees wear HP when exposed to excessive noise
              </label>
              <input
                type="checkbox"
                className="w-5 h-5 border-b border-dashed border-black bg-transparent outline-none"
                checked={formData.excessive_noise == "Yes" ? true : false}
              />
            </div>

            <div className="text-xl flex items-center gap-2">
              <label className="font-bold">Usage of HP</label>
              <input
                type="checkbox"
                className="w-5 h-5 border-b border-dashed border-black bg-transparent outline-none"
                checked={formData.hearing_protectors == "Yes" ? true : false}
              />
            </div>
          </div>
        </div>

        <div className="py-8">
          <div className="flex items-center justify-between">
            <div className="w-[550px]">
              <h1 className="text-xl font-bold underline mb-1 text-center">
                Air Conduction Test
              </h1>
              <AirConduction data={airconddata} />
            </div>

            <div className="w-[550px]">
              <h1 className="text-xl font-bold underline mb-1 text-center">
                Bone Conduction Test
              </h1>
              <BoneConduction data={boneconddata} />
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-10 py-3">
          <div className="w-1/2">
            <table class="border-collapse border border-slate-500 text-xl w-full">
              <thead>
                <tr>
                  <th class="border border-slate-600 text-xl">FREQ/KHz</th>
                  <th class="border border-slate-600 text-xl">0.5</th>
                  <th class="border border-slate-600 text-xl">1.0</th>
                  <th class="border border-slate-600 text-xl">2.0</th>
                  <th class="border border-slate-600 text-xl">3.0</th>
                  <th class="border border-slate-600 text-xl">4.0</th>
                  <th class="border border-slate-600 text-xl">6.0</th>
                  <th class="border border-slate-600 text-xl">8.0</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-slate-700 text-xl">Rt AC/db</td>
                  <td className="border border-slate-700 text-xl">
                    {formData.air_r0_5}
                  </td>
                  <td className="border border-slate-700 text-xl">
                    {formData.air_r1}
                  </td>
                  <td className="border border-slate-700 text-xl">
                    {formData.air_r2}
                  </td>
                  <td className="border border-slate-700 text-xl">
                    {formData.air_r3}
                  </td>
                  <td className="border border-slate-700 text-xl">
                    {formData.air_r4}
                  </td>
                  <td className="border border-slate-700 text-xl">
                    {formData.air_r6}
                  </td>
                  <td className="border border-slate-700 text-xl">
                    {formData.air_r8}
                  </td>
                </tr>
                <tr>
                  <td class="border border-slate-700 text-xl">Lt AC/db</td>
                  <td className="border border-slate-700 text-xl">
                    {formData.air_l0_5}
                  </td>
                  <td className="border border-slate-700 text-xl">
                    {formData.air_l1}
                  </td>
                  <td className="border border-slate-700 text-xl">
                    {formData.air_l2}
                  </td>
                  <td className="border border-slate-700 text-xl">
                    {formData.air_l3}
                  </td>
                  <td className="border border-slate-700 text-xl">
                    {formData.air_l4}
                  </td>
                  <td className="border border-slate-700 text-xl">
                    {formData.air_l6}
                  </td>
                  <td className="border border-slate-700 text-xl">
                    {formData.air_l8}
                  </td>
                </tr>

                <tr>
                  <td class="border border-slate-700 text-xl">Rt BC/db</td>
                  <td className="border border-slate-700 text-xl">
                    {formData.bone_r0_5}
                  </td>
                  <td className="border border-slate-700 text-xl">
                    {formData.bone_r1}
                  </td>
                  <td className="border border-slate-700 text-xl">
                    {formData.bone_r2}
                  </td>
                  <td className="border border-slate-700 text-xl">
                    {formData.bone_r3}
                  </td>
                  <td className="border border-slate-700 text-xl">
                    {formData.bone_r4}
                  </td>
                  <td className="border border-slate-700 text-xl">
                    {formData.bone_r6}
                  </td>
                  <td className="border border-slate-700 text-xl">
                    {formData.bone_r8}
                  </td>
                </tr>
                <tr>
                  <td class="border border-slate-700 text-xl">Lt BC/db</td>
                  <td className="border border-slate-700 text-xl">
                    {formData.bone_l0_5}
                  </td>
                  <td className="border border-slate-700 text-xl">
                    {formData.bone_l1}
                  </td>
                  <td className="border border-slate-700 text-xl">
                    {formData.bone_l2}
                  </td>
                  <td className="border border-slate-700 text-xl">
                    {formData.bone_l3}
                  </td>
                  <td className="border border-slate-700 text-xl">
                    {formData.bone_l4}
                  </td>
                  <td className="border border-slate-700 text-xl">
                    {formData.bone_l6}
                  </td>
                  <td className="border border-slate-700 text-xl">
                    {formData.bone_l8}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-1/2">
            <h1 className="text-xl font-bold underline mb-3">Otoscopy</h1>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-1/2">
                  <div className="text-xl flex items-center gap-2">
                    <label className="font-bold">Right:</label>
                    <input
                      className="border-b border-dashed border-black bg-transparent outline-none w-full"
                      value={formData.dwd_right}
                    />
                  </div>
                </div>

                <div className="w-1/2">
                  <div className="text-xl flex items-center gap-2">
                    <label className="font-bold">Left:</label>
                    <input
                      className="border-b border-dashed border-black bg-transparent outline-none w-full"
                      value={formData.dwd_left}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-1/2">
                  <div className="text-xl flex items-center gap-2">
                    <label className="font-bold w-[130px]">Tester Name:</label>
                    <input
                      className="border-b border-dashed border-black bg-transparent outline-none w-[calc(100%_-_130px)]"
                      value={formData.name_and_signature}
                    />
                  </div>
                </div>

                <div className="w-1/2">
                  <div className="text-xl flex items-center gap-2">
                    <label className="font-bold w-[130px]">Date Tested:</label>
                    <input
                      className="border-b border-dashed border-black bg-transparent outline-none w-[calc(100%_-_130px)]"
                      value={
                        formData.date_tested &&
                        formData.date_tested !== "Invalid Date"
                          ? dayjs(formData.date_tested).format("DD/MM/YYYY")
                          : ""
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full space-y-6 pt-5">
          <div className="text-xl flex items-center gap-2 w-full">
            <label className="font-bold w-[230px]">
              Result Of Examination:
            </label>
            <input
              className="border-b border-dashed border-black bg-transparent outline-none w-[calc(100%_-_230px)]"
              value={formData.diagnosis}
            />
          </div>

          <div className="flex items-center gap-6 flex-wrap">
            <p className="font-bold text-xl">Action Plan</p>

            <div className="text-xl flex items-center gap-2">
              <input
                type="checkbox"
                className="w-5 h-5 border-b border-dashed border-black bg-transparent outline-none"
                checked={
                  formData.action_plans === "Review (Date)" &&
                  formData.action_plans_text.includes("1 y")
                    ? true
                    : false
                }
              />
              <label>To review in 1 year</label>
            </div>

            <div className="text-xl flex items-center gap-2">
              <input
                type="checkbox"
                className="w-5 h-5 border-b border-dashed border-black bg-transparent outline-none"
                checked={
                  formData.action_plans === "Review (Date)" &&
                  formData.action_plans_text.includes("6 m")
                    ? true
                    : false
                }
              />
              <label>To review in 6 months</label>
            </div>

            <div className="text-xl flex items-center gap-2">
              <input
                type="checkbox"
                className="w-5 h-5 border-b border-dashed border-black bg-transparent outline-none"
                checked={
                  formData.action_plans === "Notify OSHD/MOM" ? true : false
                }
              />
              <label>To Notify OSHD/MOM</label>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <p className="font-bold text-xl">
              Certification of fitness to work in noisy environment
            </p>
            <div className="text-xl flex items-center gap-2">
              <input
                type="checkbox"
                className="w-5 h-5 border-b border-dashed border-black bg-transparent outline-none"
                checked={formData.certification === "Yes" ? true : false}
              />
              <label>Yes</label>
            </div>
          </div>
        </div>

        <p className="pt-14 text-center text-xl leading-8">
          This audiogram is vetted by the Designated Workplace Doctor and do not
          require any signatory.
          <br />
          Dr Teo Tiong Kiat
          <br />
          MBBS, GDOM, GDMH
          <br />
          MCR M01507E, DWD 0088
        </p>
      </div>
    </div>
  );
};

export default PrintTest;
