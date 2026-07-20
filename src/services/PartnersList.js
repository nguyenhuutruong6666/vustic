import logopartners from "../assets/images/partners/imgpartner.webp";
import bgpartner from "../assets/images/partners/bgpartner.webp";
import contentLogo from "../assets/images/anh1.webp";
import logotest from "../assets/images/partners/logotest.webp";

export const partnerCategories = [
  'Tất cả', 
  'Bán lẻ - Hàng tiêu dùng', 
  'Tài chính', 
  'Sản xuất', 
  'Vận tải', 
  'Bảo hiểm', 
  'Nhà hàng - Khách sạn'
];

export const featuredPartner = {
  id: 'featured',
  name: 'Tập đoàn Cafe An Thái',
  title: 'Cafe An Thái',
  category: 'Sản xuất',
  description: 'Một trong những thương hiệu hàng đầu trong ngành sản xuất cafe tại Việt Nam, đã có một hành trình phát triển đầy ấn tượng và ý nghĩa. Được thành lập vào năm 1996, Tập đoàn An Thái ra đời trong bối cảnh nền kinh tế Việt Nam đang trên đà hội nhập và phát triển. Ngành cafe, với tiềm năng to lớn, đã thu hút sự quan tâm mạnh mẽ của không chỉ người tiêu dùng trong nước mà còn cả thị trường quốc tế.',
  logo: logopartners,
  contentLogo: contentLogo,
  bgImage: bgpartner
};

export const partners = [
  {
    id: 1,
    name: 'Công ty Cổ phần Bán lẻ Tiêu dùng A',
    category: 'Bán lẻ - Hàng tiêu dùng',
    year: '2023',
    logo: logotest
  },
  {
    id: 2,
    name: 'Ngân hàng Thương mại Cổ phần B',
    category: 'Tài chính',
    year: '2021',
    logo: logotest
  },
  {
    id: 3,
    name: 'Công ty Yến Sào Khánh Hòa Khanest',
    category: 'Sản xuất',
    year: '2023',
    logo: logotest
  },
  {
    id: 4,
    name: 'Tập đoàn Vận tải Giao nhận D',
    category: 'Vận tải',
    year: '2019',
    logo: logotest
  },
  {
    id: 5,
    name: 'Tổng Công ty Bảo hiểm E',
    category: 'Bảo hiểm',
    year: '2022',
    logo: logotest
  },
  {
    id: 6,
    name: 'Chuỗi Khách sạn Nghỉ dưỡng F',
    category: 'Nhà hàng - Khách sạn',
    year: '2020',
    logo: logotest
  }
];
