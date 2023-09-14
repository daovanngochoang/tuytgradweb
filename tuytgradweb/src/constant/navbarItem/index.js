import "./style.css"
const menuItems = [
    {
      key: "1",
      path: "/",
      label: "Trang chủ",
     
    },
    {
      key: "2",
      path: "/branch",
      label: "Alpahtech Việt Nam",
      wrapperContent: (
        <ul  className="wrapper-popoer">
          <li>GIỚI THIỆU</li>
          <li>NỀN TẢN CỐT LỎI</li>
          <li>CHIẾN LƯỢC</li>
          <li>TIÊU CHUẨN NGƯỜI DÙNG</li>
        </ul>
      ),
    },
    {
      key: "3",
      path: "/product",
      label: "Sản Phẩm",
      wrapperContent: (
        <ul  className="wrapper-popoer">
          <li>Thang máy Atvin</li>
          <li>Thang máy Gia Đình</li>
          <li>Thang máy Tashi</li>
          <li>Thang máy Lồng Kính</li>
          <li>Thang cuốn</li>
          <li>Thang máy tải hàng</li>
        </ul>
      ),
    },
    {
      key: "4",
      path: "/services",
      label: "Dịch Vụ",
      wrapperContent: (
        <ul  className="wrapper-popoer">
          <li>Lắp đặt-vận hành thang máy</li>
          <li>Bảo trì bảo dưỡng thang máy</li>
          <li>Bảo hành thang máy</li>
          <li>Sửa chữa thang máy</li>
          <li>Chăm sóc khách hàng</li>
          <li>Linh kiện thiết bị</li>
        </ul>
      ),
    },
    {
      key: "5",
      path: "/customer",
      label: "Khách Hàng",
      wrapperContent: (
        <ul  className="wrapper-popoer">
          <li>KHÁCH HÀNH DOANH NGHIỆP</li>
          <li>KHÁCH HÀNG CHÍNH PHỦ</li>
          <li>KHÁCH HÀNG CÁ NHÂN</li>
        </ul>
      ),
    },
    {
      key: "6",
      path: "/news",
      label: "Tin Tức",
      wrapperContent: (
        <ul  className="wrapper-popoer">
          <li>TIN TỨC TỪ ATVIN</li>
          <li>TIN NGÀNH THANG MÁY</li>
          <li>TUYỂN DỤNG</li>
          <li>TIN BẤT ĐỘNG SẢN</li>
        </ul>
      ),
    },
    {
      key: "7",
      path: "/contribute",
      label: "Đóng góp xã hội",
    
    },
    {
      key: "8",
      path: "/contact",
      label: "Liên Hệ",
     
    },
  ];
export default menuItems;
