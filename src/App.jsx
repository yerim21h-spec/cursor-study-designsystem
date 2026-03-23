import { useState, useRef } from 'react';
import {
  Button, ButtonFooter, Badge, CheckMark, Rating, Logo,
  Input, Dropdown, DatePicker,
  NavigationBar, TabBar, Tab, Pagination, QuantityPicker,
  Modal, Emptyspace, AddressCard, Table, Footer,
  ProductCard,
  IconCheck, IconShoppingBag, IconHeart, IconSearch,
} from './components';

/* ─────────────────────────── Layout helpers ─────────────────────────── */

function Section({ id, title, children }) {
  return (
    <section id={id} className="mb-16 scroll-mt-8">
      <h2 className="font-kr text-title-24 font-semibold text-[var(--color-text-default)] mb-6 pb-3 border-b-2 border-[var(--color-border-brand)]">
        {title}
      </h2>
      <div className="flex flex-col gap-8">{children}</div>
    </section>
  );
}

function Row({ label, children }) {
  return (
    <div>
      <p className="font-kr text-body-14 font-semibold text-[var(--color-text-subtle)] mb-3">{label}</p>
      <div className="flex flex-wrap items-start gap-4">{children}</div>
    </div>
  );
}

function ColorSwatch({ name, variable, hex }) {
  return (
    <div className="flex flex-col items-center gap-2 w-24">
      <div className="w-16 h-16 rounded-lg border border-[var(--color-border-default)] shadow-sm" style={{ backgroundColor: `var(${variable})` }} />
      <span className="font-kr text-caption-12 font-semibold text-[var(--color-text-default)] text-center leading-tight">{name}</span>
      <span className="font-kr text-caption-10 font-regular text-[var(--color-text-subtlest)]">{hex}</span>
    </div>
  );
}

function TypographySample({ name, className: cls, sample }) {
  return (
    <div className="flex items-baseline gap-6 py-2 border-b border-[var(--color-border-default)]">
      <span className="font-kr text-caption-12 font-medium text-[var(--color-text-subtle)] w-40 shrink-0">{name}</span>
      <span className={cls}>{sample || '다람쥐 헌 쳇바퀴에 타고파 ABCDEFG 0123456789'}</span>
    </div>
  );
}

/* ─────────────────────────── Sidebar nav ─────────────────────────── */

const NAV = [
  { id: 'colors', label: 'Colors' },
  { id: 'typography', label: 'Typography' },
  { id: 'logo', label: 'Logo' },
  { id: 'button', label: 'Button' },
  { id: 'badge', label: 'Badge / CheckMark / Rating' },
  { id: 'input', label: 'Input' },
  { id: 'dropdown', label: 'Dropdown' },
  { id: 'datepicker', label: 'DatePicker' },
  { id: 'navbar', label: 'Navigation Bar' },
  { id: 'tabbar', label: 'Tab Bar' },
  { id: 'tab', label: 'Tab' },
  { id: 'pagination', label: 'Pagination' },
  { id: 'modal', label: 'Modal' },
  { id: 'productcard', label: 'Product Card' },
  { id: 'table', label: 'Table' },
  { id: 'emptyspace', label: 'Emptyspace' },
  { id: 'addresscard', label: 'Address Card' },
  { id: 'footer', label: 'Footer' },
];

function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 w-56 h-screen overflow-y-auto bg-[var(--color-bg-subtlest)] border-r border-[var(--color-border-default)] py-8 px-4 z-40">
      <div className="mb-8">
        <span className="font-eng text-title-20 font-semibold text-[var(--color-text-brand)]">Design System</span>
      </div>
      <nav className="flex flex-col gap-1">
        {NAV.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="font-kr text-body-14 font-regular text-[var(--color-text-subtle)] px-3 py-2 rounded-md hover:bg-[var(--color-bg-brand-subtle)] hover:text-[var(--color-text-brand)] transition-colors"
          >
            {label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

/* ─────────────────────────── App ─────────────────────────── */

export default function App() {
  const [checked, setChecked] = useState(false);
  const [ratingVal, setRatingVal] = useState(3);
  const [inputVal, setInputVal] = useState('');
  const [textareaVal, setTextareaVal] = useState('');
  const [dropdownVal, setDropdownVal] = useState(null);
  const [dateVal, setDateVal] = useState(null);
  const [activeTab, setActiveTab] = useState('home');
  const [tabIndex, setTabIndex] = useState(0);
  const [tab2Index, setTab2Index] = useState(0);
  const [page, setPage] = useState(1);
  const [qty, setQty] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  const dropdownOptions = [
    { value: 'opt1', label: '옵션 1' },
    { value: 'opt2', label: '옵션 2' },
    { value: 'opt3', label: '옵션 3' },
  ];

  const sampleProduct = {
    name: '오가닉 코튼 티셔츠',
    image: null,
    badge: 'NEW',
    originalPrice: '59,000원',
    salePrice: '39,000원',
    discount: '30%',
    rating: 4,
    wishlisted: false,
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="ml-56 flex-1 px-10 py-10 max-w-5xl">
        <header className="mb-12">
          <h1 className="font-eng text-header-28 font-semibold text-[var(--color-text-brand)] mb-2">
            Design System
          </h1>
          <p className="font-kr text-body-16 font-regular text-[var(--color-text-subtle)]">
            Figma에서 추출한 디자인 토큰과 컴포넌트 라이브러리
          </p>
        </header>

        {/* ═══════════════════ TOKENS ═══════════════════ */}

        {/* Colors */}
        <Section id="colors" title="Colors">
          <Row label="Primitive Colors">
            <ColorSwatch name="Green 800" variable="--color-green-800" hex="#4b5240" />
            <ColorSwatch name="Green 700" variable="--color-green-700" hex="#606c4e" />
            <ColorSwatch name="Green 500" variable="--color-green-500" hex="#6f7b5f" />
            <ColorSwatch name="Green 300" variable="--color-green-300" hex="#bac3ab" />
            <ColorSwatch name="Green 200" variable="--color-green-200" hex="#9aa689" />
            <ColorSwatch name="Green 100" variable="--color-green-100" hex="#e3e6d8" />
          </Row>
          <Row label="Gray Scale">
            <ColorSwatch name="Gray 900" variable="--color-gray-900" hex="#1d1e1b" />
            <ColorSwatch name="Gray 600" variable="--color-gray-600" hex="#686967" />
            <ColorSwatch name="Gray 400" variable="--color-gray-400" hex="#a4a79f" />
            <ColorSwatch name="Gray 200" variable="--color-gray-200" hex="#e4e5df" />
            <ColorSwatch name="Gray 100" variable="--color-gray-100" hex="#f0f0ef" />
            <ColorSwatch name="White" variable="--color-white" hex="#ffffff" />
          </Row>
          <Row label="Semantic — Text">
            <ColorSwatch name="Text Default" variable="--color-text-default" hex="gray-900" />
            <ColorSwatch name="Text Subtle" variable="--color-text-subtle" hex="gray-600" />
            <ColorSwatch name="Text Subtlest" variable="--color-text-subtlest" hex="gray-400" />
            <ColorSwatch name="Text Brand" variable="--color-text-brand" hex="green-700" />
            <ColorSwatch name="Text Brand Bold" variable="--color-text-brand-bold" hex="green-800" />
            <ColorSwatch name="Text Inverse" variable="--color-text-inverse" hex="white" />
          </Row>
          <Row label="Semantic — Background">
            <ColorSwatch name="BG Default" variable="--color-bg-default" hex="white" />
            <ColorSwatch name="BG Subtle" variable="--color-bg-subtle" hex="gray-200" />
            <ColorSwatch name="BG Subtlest" variable="--color-bg-subtlest" hex="gray-100" />
            <ColorSwatch name="BG Brand" variable="--color-bg-brand" hex="green-700" />
            <ColorSwatch name="BG Brand Subtle" variable="--color-bg-brand-subtle" hex="green-100" />
          </Row>
          <Row label="Semantic — Border">
            <ColorSwatch name="Border Default" variable="--color-border-default" hex="gray-200" />
            <ColorSwatch name="Border Brand" variable="--color-border-brand" hex="green-500" />
            <ColorSwatch name="Border Brand Subtle" variable="--color-border-brand-subtle" hex="green-300" />
          </Row>
        </Section>

        {/* Typography */}
        <Section id="typography" title="Typography">
          <Row label="Font Families">
            <div className="flex flex-col gap-3 w-full">
              <div className="flex items-center gap-4">
                <span className="font-kr text-body-14 font-medium text-[var(--color-text-subtle)] w-20">KR</span>
                <span className="font-kr text-body-18 font-regular">Pretendard — 가나다라마바사 ABCDEF 0123456789</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-kr text-body-14 font-medium text-[var(--color-text-subtle)] w-20">ENG</span>
                <span className="font-eng text-body-18 font-regular">Playfair Display — The Quick Brown Fox</span>
              </div>
            </div>
          </Row>
          <Row label="Type Scale">
            <div className="flex flex-col w-full">
              <TypographySample name="Header/28 Sb KR" className="font-kr text-header-28 font-semibold text-[var(--color-text-default)]" />
              <TypographySample name="Header/28 Sb ENG" className="font-eng text-header-28 font-semibold text-[var(--color-text-default)]" sample="The Quick Brown Fox Jumps Over" />
              <TypographySample name="Title/24 SB" className="font-kr text-title-24 font-semibold text-[var(--color-text-default)]" />
              <TypographySample name="Title/22 Sb" className="font-kr text-title-22 font-semibold text-[var(--color-text-default)]" />
              <TypographySample name="Title/20 Sb" className="font-kr text-title-20 font-semibold text-[var(--color-text-default)]" />
              <TypographySample name="Body/18 Sb" className="font-kr text-body-18 font-semibold text-[var(--color-text-default)]" />
              <TypographySample name="Body/18 Rg" className="font-kr text-body-18 font-regular text-[var(--color-text-default)]" />
              <TypographySample name="Body/16 Bd" className="font-kr text-body-16 font-bold text-[var(--color-text-default)]" />
              <TypographySample name="Body/16 Sb" className="font-kr text-body-16 font-semibold text-[var(--color-text-default)]" />
              <TypographySample name="Body/16 Rg" className="font-kr text-body-16 font-regular text-[var(--color-text-default)]" />
              <TypographySample name="Body/14 Sb" className="font-kr text-body-14 font-semibold text-[var(--color-text-default)]" />
              <TypographySample name="Body/14 Rg" className="font-kr text-body-14 font-regular text-[var(--color-text-default)]" />
              <TypographySample name="Caption/12 Sb" className="font-kr text-caption-12 font-semibold text-[var(--color-text-default)]" />
              <TypographySample name="Caption/12 Rg" className="font-kr text-caption-12 font-regular text-[var(--color-text-default)]" />
              <TypographySample name="Caption/10 Rg" className="font-kr text-caption-10 font-regular text-[var(--color-text-default)]" />
            </div>
          </Row>
        </Section>

        {/* ═══════════════════ COMPONENTS ═══════════════════ */}

        {/* Logo */}
        <Section id="logo" title="Logo">
          <Row label="Color On / Off">
            <Logo color={true} />
            <div className="bg-[var(--color-bg-brand)] p-4 rounded-lg">
              <Logo color={false} />
            </div>
          </Row>
        </Section>

        {/* Button */}
        <Section id="button" title="Button">
          <Row label="Primary — Default / Medium / Small">
            <Button label="Default" variant="primary" size="default" />
            <Button label="Medium" variant="primary" size="medium" />
            <Button label="Small" variant="primary" size="small" />
          </Row>
          <Row label="Primary — Disabled">
            <Button label="Disabled" variant="primary" disabled />
          </Row>
          <Row label="Outline — Default / Disabled">
            <Button label="Outline" variant="outline" />
            <Button label="Disabled" variant="outline" disabled />
          </Row>
          <Row label="With Icons (prefix / suffix)">
            <Button label="확인" variant="primary" prefixIcon={<IconCheck className="w-6 h-6" />} />
            <Button label="장바구니" variant="outline" suffixIcon={<IconShoppingBag className="w-6 h-6" />} />
          </Row>
          <Row label="ButtonFooter — single / double / iconText">
            <div className="w-[390px] border border-[var(--color-border-default)] rounded-lg overflow-hidden">
              <ButtonFooter variant="single" primaryLabel="확인" />
            </div>
            <div className="w-[390px] border border-[var(--color-border-default)] rounded-lg overflow-hidden">
              <ButtonFooter variant="double" primaryLabel="구매하기" secondaryLabel="장바구니" />
            </div>
            <div className="w-[390px] border border-[var(--color-border-default)] rounded-lg overflow-hidden">
              <ButtonFooter variant="iconText" primaryLabel="구매하기" icon={<IconHeart className="w-6 h-6 text-[var(--color-text-subtle)]" />} />
            </div>
          </Row>
        </Section>

        {/* Badge / CheckMark / Rating */}
        <Section id="badge" title="Badge / CheckMark / Rating">
          <Row label="Badge — Default / Bold x Small / Medium">
            <Badge label="NEW" type="default" size="small" />
            <Badge label="SALE" type="bold" size="small" />
            <Badge label="NEW" type="default" size="medium" />
            <Badge label="SALE" type="bold" size="medium" />
          </Row>
          <Row label="CheckMark — On / Off (click to toggle)">
            <CheckMark checked={checked} onChange={setChecked} />
            <span className="font-kr text-body-14 text-[var(--color-text-default)]">{checked ? 'Checked' : 'Unchecked'}</span>
          </Row>
          <Row label="Rating — Interactive (click stars)">
            <Rating value={ratingVal} readOnly={false} onChange={setRatingVal} />
            <span className="font-kr text-body-14 text-[var(--color-text-default)]">{ratingVal} / 5</span>
          </Row>
          <Row label="Rating — Read only / Inverse color">
            <Rating value={4} color="primary" />
            <Rating value={2} color="inverse" />
          </Row>
        </Section>

        {/* Input */}
        <Section id="input" title="Input">
          <Row label="Text field — Default / Filled">
            <Input placeholder="입력해주세요" value={inputVal} onChange={setInputVal} className="w-[302px]" />
          </Row>
          <Row label="Text area">
            <Input variant="textarea" placeholder="내용을 입력해주세요" value={textareaVal} onChange={setTextareaVal} className="w-[302px]" />
          </Row>
          <Row label="With suffix icon">
            <Input placeholder="검색" suffix={<IconSearch className="w-6 h-6 text-[var(--color-text-subtlest)]" />} className="w-[302px]" />
          </Row>
          <Row label="Disabled">
            <Input placeholder="비활성화" disabled className="w-[302px]" />
          </Row>
        </Section>

        {/* Dropdown */}
        <Section id="dropdown" title="Dropdown">
          <Row label="Default">
            <Dropdown options={dropdownOptions} value={dropdownVal} onChange={setDropdownVal} className="w-[283px]" />
          </Row>
          <Row label="Disabled">
            <Dropdown options={dropdownOptions} disabled className="w-[283px]" />
          </Row>
        </Section>

        {/* DatePicker */}
        <Section id="datepicker" title="DatePicker">
          <Row label="Calendar">
            <DatePicker value={dateVal} onChange={setDateVal} />
          </Row>
        </Section>

        {/* NavigationBar */}
        <Section id="navbar" title="Navigation Bar">
          <Row label="State=Home">
            <div className="w-[390px] rounded-lg overflow-hidden"><NavigationBar state="home" /></div>
          </Row>
          <Row label="State=Sub, Property=Default">
            <div className="w-[390px] rounded-lg overflow-hidden border border-[var(--color-border-default)]"><NavigationBar state="sub" title="상품 상세" /></div>
          </Row>
          <Row label="State=Sub, Property=Only Text">
            <div className="w-[390px] rounded-lg overflow-hidden border border-[var(--color-border-default)]"><NavigationBar state="sub" variant="onlyText" title="하위 페이지" /></div>
          </Row>
        </Section>

        {/* TabBar */}
        <Section id="tabbar" title="Tab Bar">
          <Row label="Default (click icons to switch)">
            <div className="w-[390px] rounded-lg overflow-hidden border border-[var(--color-border-default)]">
              <TabBar activeTab={activeTab} onChange={setActiveTab} />
            </div>
          </Row>
        </Section>

        {/* Tab */}
        <Section id="tab" title="Tab">
          <Row label="1 Depth (click to switch)">
            <div className="w-[390px] rounded-lg overflow-hidden border border-[var(--color-border-default)]">
              <Tab items={['전체', '상의', '하의', '아우터', '원피스']} activeIndex={tabIndex} onChange={setTabIndex} depth={1} />
            </div>
          </Row>
          <Row label="2 Depth (click to switch)">
            <div className="w-[390px]">
              <Tab items={['추천순', '인기순', '최신순']} activeIndex={tab2Index} onChange={setTab2Index} depth={2} />
            </div>
          </Row>
        </Section>

        {/* Pagination / QuantityPicker */}
        <Section id="pagination" title="Pagination / Quantity Picker">
          <Row label="Pagination — 5 page (current: {page})">
            <Pagination totalPages={10} currentPage={page} onChange={setPage} type="5page" />
          </Row>
          <Row label="Quantity Picker">
            <QuantityPicker value={qty} onChange={setQty} />
            <span className="font-kr text-body-14 text-[var(--color-text-default)]">수량: {qty}</span>
          </Row>
        </Section>

        {/* Modal */}
        <Section id="modal" title="Modal">
          <Row label="Click to open modals">
            <Button label="1 Button Modal" variant="outline" onClick={() => setModalOpen(true)} />
            <Button label="2 Button Modal" variant="outline" onClick={() => setModal2Open(true)} />
          </Row>
          <Modal open={modalOpen} title="알림" body="변경사항이 저장되었습니다." footer="single" onClose={() => setModalOpen(false)} />
          <Modal open={modal2Open} title="삭제 확인" body="정말 삭제하시겠습니까?" footer="double" primaryLabel="삭제" secondaryLabel="취소" onPrimary={() => setModal2Open(false)} onClose={() => setModal2Open(false)} />
        </Section>

        {/* ProductCard */}
        <Section id="productcard" title="Product Card">
          <Row label="Home variant">
            <ProductCard variant="home" product={sampleProduct} />
            <ProductCard variant="home" product={{ ...sampleProduct, name: '린넨 와이드 팬츠', badge: 'BEST', discount: '20%', salePrice: '45,000원', rating: 5 }} />
          </Row>
          <Row label="Cart list variant">
            <div className="w-[390px] border border-[var(--color-border-default)] rounded-lg overflow-hidden">
              <ProductCard variant="cart" product={{ ...sampleProduct, option: 'M / Black', quantity: 2 }} />
            </div>
          </Row>
        </Section>

        {/* Table */}
        <Section id="table" title="Table">
          <Row label="Type=Title">
            <Table
              type="title"
              headers={['항목', '내용']}
              rows={[['주문번호', '2026031200001'], ['결제금액', '39,000원'], ['배송상태', '배송중']]}
              className="w-[390px]"
            />
          </Row>
          <Row label="Type=Card">
            <Table
              type="card"
              headers={['적립일', '내용', '금액']}
              rows={[['2026.03.01', '상품 구매 적립', '+390원'], ['2026.02.15', '리뷰 작성 적립', '+500원']]}
              className="w-[390px]"
            />
          </Row>
        </Section>

        {/* Emptyspace */}
        <Section id="emptyspace" title="Emptyspace">
          <Row label="Background=Gray / White">
            <Emptyspace message="장바구니가 비어있습니다." background="gray" className="w-[390px] rounded-lg" />
            <Emptyspace message="최근 본 상품이 없습니다." background="white" className="w-[390px] rounded-lg border border-[var(--color-border-default)]" />
          </Row>
        </Section>

        {/* AddressCard */}
        <Section id="addresscard" title="Address Card">
          <Row label="기본 배송지 / 일반">
            <AddressCard name="홍길동" address="서울특별시 강남구 역삼동 123-45" phone="010-1234-5678" isDefault={true} className="w-[390px]" />
            <AddressCard name="김철수" address="서울특별시 마포구 합정동 67-89" phone="010-9876-5432" isDefault={false} className="w-[390px]" />
          </Row>
        </Section>

        {/* Footer */}
        <Section id="footer" title="Footer">
          <Row label="Default (click to expand)">
            <div className="w-[390px] rounded-lg overflow-hidden">
              <Footer
                links={[{ label: '이용약관' }, { label: '개인정보처리방침' }, { label: '고객센터' }]}
                companyInfo={"상호: 커서스터디 | 대표: 홍길동\n사업자등록번호: 123-45-67890\n주소: 서울특별시 강남구 역삼동 123-45"}
              />
            </div>
          </Row>
        </Section>

        <footer className="mt-20 pt-8 border-t border-[var(--color-border-default)] text-center">
          <p className="font-kr text-caption-12 font-regular text-[var(--color-text-subtlest)]">
            Cursor Study Design System &middot; Figma MCP &rarr; React + Tailwind CSS
          </p>
        </footer>
      </main>
    </div>
  );
}
