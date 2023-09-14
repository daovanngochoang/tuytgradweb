import React from "react";
import "../PageStyle/Contact.css";
import ContactForm from "../components/contactForm";
const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-left">
        <h1 style={{alignItems: "center"}}>Liên hệ đến thang máy</h1>
        <ContactForm />
      </div>
      <div className="contact-right">
        <h2>HÃNG THANG MÁY ALPHATECH VIỆT NAM THƯƠNG HIỆU THANG MÁY ATVIN</h2>
        <ul>
          <li>Trụ sở chính: Lô 1C4/NO Khu đô thị Nam Trung Yên – phường Trung Hòa – Quận Cầu Giấy – Hà Nội. Hotine: 098 115 9898</li>
        <li>
        Chi nhánh tại Quảng Ninh: MG3 căn 12, Vinhomes Dragon, Bến Đoan, Hồng Gai, Quảng Ninh. Hotline: 098 153 9898
        </li>
        <li>
        Chi nhánh tại Hải Phòng: LK 09-20 Hoàng Huy Riverside, Phường Thượng Lý, Quận Hồng Bàng, Hải Phòng.  Hotine: 093 326 9898
        </li>
        <li>
        Chi nhánh tại Bắc Ninh:CL7 Tô Hiến Thành – Phường Kinh Bắc – Thành phố Bắc Ninh – Bắc Ninh. ĐT: 0906 207 298
        </li>
        </ul>
        <ul style={{marginTop: "2rem"}}>
          <li>
          VP tại Bắc Giang: 435 Lê Lợi – Tp. Bắc Giang – tỉnh Bắc Giang. ĐT: 093 627 62 98
          </li>
          <li>
          VP tại Bắc Giang: 435 Lê Lợi – Tp. Bắc Giang – tỉnh Bắc Giang. ĐT: 093 627 62 98
          </li>
          <li>
          VP tại Vĩnh Phúc: Yên Lạc – Vĩnh Phúc. ĐT: 0988 292 963
          </li>
          <li>
          VP tại Thanh Hóa: Lô 02, đường Dương Đình Nghệ – Đông Bắc Ga – Phường Đông Thọ – Tp. Thanh Hóa. ĐT: 0936 433 298
          </li>
          <li>
          VP tại Đà Nẵng: Số 03 đường Phạm Vinh – Phường Hòa Thọ Đông – Quận Cẩm Lệ – Tp. Đà Nẵng. ĐT: 0236 379 9898
          </li>
          <li>
          VP tại Nha Trang: Số 64 đường Trần Phú – Nha Trang – tỉnh Khánh Hòa. ĐT: 0938 858 366
          </li>
          <li>
          VP tại Bình Dương: Số 66A đương N3 Khu đô thị DVTM Sóng Thần – Dĩ An – Bình Dương
          </li>
          <li>
          VP tại TP Hồ Chí Minh: Số 58 Tân Thới Nhất 14 – Phường Tân Thới Nhất- Quận 12 – TP. Hồ Chí Minh. ĐT: 028 625 06575
          </li>
          <li>
          VP tại Lào: Kampengmaung Road, Dongsavath Villager, Sisattanak District, Vientiane, Lao.
          </li>
          <li>
          Nhà máy sản xuất hợp tác số 1: Ấp 1, xã Bình Lợi, huyện Vĩnh Cửu, tỉnh Đồng Nai.
          </li>
          <li>
          Nhà máy sản xuất hợp tác số 2: Số 74 đường số 511 Ấp Bào Chứa – xã Nhuận Đức, huyện Củ Chi, TP. Hồ Chí Minh
          </li>
          <li>
          Nhà máy sản xuất Thang Homelift: Hoài Đức – Hà Nội
          </li>
          <li>
          Trung tâm Dịch vụ khách hàng 1: LK 18/12 Hà Trì 4, Hà Đông, Hà Nội
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
