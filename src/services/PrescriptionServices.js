/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const PRESCRIPTION_API_BASE_URL =
  "http://localhost:8080/pharmacy-online/admin/prescriptions";

class PrescriptionServices {
  getListPrescription(status) {
    return axios.get(PRESCRIPTION_API_BASE_URL + "/list");
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
}

export default new PrescriptionServices();
