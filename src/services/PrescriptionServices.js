/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const PRESCRIPTION_API_BASE_URL =
  "http://localhost:8080/pharmacy-online/admin/prescriptions";

class PrescriptionServices {
  getListPrescription() {
    return axios.get(PRESCRIPTION_API_BASE_URL + "/list");
  }

  getPrescriptionDetail(id) {
    return axios.get(PRESCRIPTION_API_BASE_URL + "/view/" + id);
  }

  getListPrescriptionByFilterStatus(status) {
    return axios.get(PRESCRIPTION_API_BASE_URL + "/list?status=" + status);
  }

  updateStatusPrescription(status, id) {
    return axios.put(
      PRESCRIPTION_API_BASE_URL + "/update-status/" + id + "?status=" + status
    );
  }

  removePrescription(prescriptionId) {
    return axios.delete(
      PRESCRIPTION_API_BASE_URL + "/delete/" + prescriptionId
    );
  }

  createPrescriptions(presciption, accountId) {
    return axios.post(
      PRESCRIPTION_API_BASE_URL + "/create?account_id=" + accountId,
      presciption
    );
  }

  sendEmail(prescriptionId, customSubject, customMessage, customContent) {
    return axios.post(
      PRESCRIPTION_API_BASE_URL +
        "/send-email?prescriptionId=" +
        prescriptionId +
        "&customSubject=" +
        customSubject +
        "&customMessage=" +
        customMessage +
        "&customContent=" +
        customContent
    ); //http://localhost:8080/pharmacy-online/admin/prescriptions/send-email?prescriptionId=1&customSubject=xac nhan&customMessage=ban da gui
  }
}

export default new PrescriptionServices();
