/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { toast } from "react-toastify";
import ModalButton from "./ModalButton";

import { MdOutlineModeEdit, MdDelete } from "react-icons/md";
import IconButton from "./IconButton";
import "./styles/DashboardTable.css";

type PropsType = {
  headers?: string[];
  EditForm?: React.ComponentType<{ data: never }>;
  editFormProps?: object;
  data?: [];
  editLink?: string;
  student?: boolean;
  deleteMethod?: any;
  registerMethod?: unknown;
};

const DashboradTable = ({
  headers,
  data,
  EditForm,
  editFormProps,
  deleteMethod,
}: PropsType) => {
  const handelClick = async (id: unknown) => {
    await toast.promise(deleteMethod(id), {
      pending: "pending",
      success: "success",
      error: "faild",
    });
  };

  return (
    <div className="dashboard-table">
      <table>
        <thead>
          <tr>
            {headers?.map((e, i) => (
              <th key={i} scope="col">
                {e}
              </th>
            ))}
            <th scope="col">actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((ob: never, i: number) => (
            <tr key={i} className={i % 2 === 0 ? "even" : "odd"}>
              {Object.keys(ob).map((prop, propIndex) => {
                if (prop !== "id")
                  return (
                    <td key={propIndex}>
                      <p className={prop === "body" ? `body-width` : ""}>
                        {ob[prop]}
                      </p>
                    </td>
                  );
              })}
              <td className="flex-row">
                {EditForm && (
                  <ModalButton
                    modalContent={<EditForm data={ob} {...editFormProps} />}
                    icon={<MdOutlineModeEdit size={15} />}
                    customeStyle={true}
                    ModalTitle="Edit Post"
                  />
                )}
                {deleteMethod ? (
                  <IconButton
                    onClick={() => {
                      handelClick(ob?.id);
                    }}
                    icon={<MdDelete size={15} />}
                  />
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboradTable;
