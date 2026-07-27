import { useParams } from 'react-router';
import { members } from '../../services/OrganizationChart';
import MemberDetail from '../../components/compage/MemberDetail/MemberDetail';
import ContactBanner from '../../components/compage/ContactBanner/ContactBanner';

function MemberDetailPage() {
  const { id } = useParams();
  const member = members.find(m => m.id === parseInt(id));

  if (!member) {
    return (
      <div style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Không tìm thấy thành viên</h2>
      </div>
    );
  }

  return (
    <main className="member-detail-page">
      <MemberDetail member={member} />
      <ContactBanner />
    </main>
  );
}

export default MemberDetailPage;
