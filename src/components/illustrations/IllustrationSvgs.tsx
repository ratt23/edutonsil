import React from 'react';

interface SvgProps {
  className?: string;
  size?: number;
}

// 1. Patient Drinking Water (Hero character)
export const PatientDrinkingIllustration: React.FC<SvgProps> = ({ className = '', size = 260 }) => (
  <svg
    width={size}
    height={size * 1.05}
    viewBox="0 0 240 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Ilustrasi pasien minum air dengan tenang"
  >
    {/* Soft background glow */}
    <circle cx="120" cy="125" r="105" fill="#FDF3E7" />
    <circle cx="180" cy="70" r="30" fill="#E8F4F8" opacity="0.7" />
    <circle cx="50" cy="170" r="22" fill="#EAF6EE" opacity="0.8" />

    {/* Decorative bubbles/dots */}
    <circle cx="205" cy="55" r="4" fill="#A4D8EC" />
    <circle cx="195" cy="40" r="6" fill="#A4D8EC" opacity="0.6" />
    <circle cx="215" cy="75" r="3" fill="#A4D8EC" />

    {/* Body / Lilac Sweater */}
    <path
      d="M50 245 C50 195 75 165 110 160 C125 160 145 160 165 170 C185 180 200 210 205 245 Z"
      fill="#D7CEF2"
    />
    <path
      d="M95 165 C108 178 132 178 145 165"
      stroke="#B8A8DE"
      strokeWidth="4"
      strokeLinecap="round"
    />

    {/* Neck */}
    <path d="M108 135 L108 165 L132 165 L132 135 Z" fill="#FCD5B5" />
    <path d="M108 148 C115 155 125 155 132 148" fill="#F5BE9E" opacity="0.5" />

    {/* Hair Back */}
    <path
      d="M75 120 C60 70 85 30 135 30 C185 30 205 75 195 140 C190 170 180 185 175 190 C170 175 168 150 168 140 C165 95 150 55 120 55 C90 55 80 90 75 120 Z"
      fill="#3A2E2B"
    />

    {/* Face */}
    <path
      d="M85 95 C85 65 102 52 125 52 C150 52 165 70 165 100 C165 130 148 148 125 148 C98 148 85 125 85 95 Z"
      fill="#FDE2CD"
    />

    {/* Hair front bangs */}
    <path
      d="M85 80 C95 65 115 62 135 68 C150 72 162 82 165 95 C160 78 145 60 125 60 C105 60 92 70 85 80 Z"
      fill="#4A3B36"
    />
    <path
      d="M80 95 C78 120 82 145 88 165 C85 155 82 130 83 110 C83 95 85 85 88 78 Z"
      fill="#3A2E2B"
    />
    <path
      d="M165 90 C168 115 170 145 168 165 C167 150 165 125 163 105 Z"
      fill="#3A2E2B"
    />

    {/* Ears */}
    <circle cx="85" cy="102" r="8" fill="#FCD5B5" />
    <circle cx="165" cy="102" r="8" fill="#FCD5B5" />

    {/* Peaceful closed eyes */}
    <path d="M100 95 Q108 102 115 95" stroke="#3A2E2B" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M135 95 Q142 102 150 95" stroke="#3A2E2B" strokeWidth="2.5" strokeLinecap="round" />

    {/* Cute gentle eyebrows */}
    <path d="M98 88 Q108 85 115 89" stroke="#4A3B36" strokeWidth="2" strokeLinecap="round" />
    <path d="M135 89 Q142 85 152 88" stroke="#4A3B36" strokeWidth="2" strokeLinecap="round" />

    {/* Soft pink blush */}
    <ellipse cx="98" cy="108" rx="8" ry="4.5" fill="#F8A5A5" opacity="0.6" />
    <ellipse cx="152" cy="108" rx="8" ry="4.5" fill="#F8A5A5" opacity="0.6" />

    {/* Nose & Smile */}
    <path d="M125 98 Q127 106 124 108" stroke="#E2A684" strokeWidth="2" strokeLinecap="round" />
    <path d="M118 118 Q125 126 132 118" stroke="#C86A6A" strokeWidth="2.5" strokeLinecap="round" />

    {/* Hands holding water glass */}
    {/* Glass */}
    <path
      d="M170 105 L165 155 C164 160 168 165 174 165 L196 165 C202 165 206 160 205 155 L200 105 Z"
      fill="#E6F5FC"
      stroke="#79BEE0"
      strokeWidth="2.5"
    />
    {/* Water inside glass */}
    <path
      d="M168 120 L166 153 C165 157 168 161 173 161 L197 161 C202 161 205 157 204 153 L202 120 Z"
      fill="#8FD3F4"
      opacity="0.8"
    />
    {/* Water shine reflection */}
    <path d="M172 124 L170 152" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.9" />

    {/* Patient Arm & Fingers */}
    <path
      d="M150 185 C160 170 168 150 172 140 C175 135 180 135 180 142 C178 152 172 175 160 195 Z"
      fill="#FDE2CD"
    />
    <circle cx="172" cy="140" r="5" fill="#FCD5B5" />
    <circle cx="174" cy="148" r="4.5" fill="#FCD5B5" />
    <circle cx="175" cy="156" r="4" fill="#FCD5B5" />

    {/* Cute sparkles */}
    <path d="M55 75 L60 65 L65 75 L75 80 L65 85 L60 95 L55 85 L45 80 Z" fill="#F6D365" opacity="0.8" />
    <path d="M195 200 L198 193 L201 200 L208 203 L201 206 L198 213 L195 206 L188 203 Z" fill="#F6D365" opacity="0.7" />
  </svg>
);

// 2. Tonsil Oral Cavity Diagram (Detail area tonsil & eskar putih)
export const TonsilDiagramIllustration: React.FC<SvgProps> = ({ className = '', size = 110 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Diagram mulut memperlihatkan area tonsil dan lapisan penyembuhan"
  >
    {/* Outer soft circle with dashed border */}
    <circle cx="60" cy="60" r="56" fill="#FFF5F5" stroke="#F8B4B4" strokeWidth="2" strokeDasharray="4 3" />

    {/* Lips shape */}
    <path
      d="M25 60 C25 35 40 25 60 25 C80 25 95 35 95 60 C95 85 80 95 60 95 C40 95 25 85 25 60 Z"
      fill="#F87171"
      opacity="0.85"
    />

    {/* Inner mouth cavity (dark reddish pink) */}
    <path
      d="M32 60 C32 42 45 35 60 35 C75 35 88 42 88 60 C88 78 75 85 60 85 C45 85 32 78 32 60 Z"
      fill="#7F1D1D"
    />

    {/* Upper teeth */}
    <path
      d="M44 38 C44 42 48 44 52 44 C56 44 58 40 60 40 C62 40 64 44 68 44 C72 44 76 42 76 38 Z"
      fill="#FFFFFF"
    />

    {/* Tongue at bottom */}
    <path
      d="M40 70 C40 62 50 60 60 60 C70 60 80 62 80 70 C80 80 70 85 60 85 C50 85 40 80 40 70 Z"
      fill="#EF4444"
    />
    <path d="M60 63 L60 76" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />

    {/* Uvula (Anak tekak) */}
    <path
      d="M57 44 C57 44 56 55 60 55 C64 55 63 44 63 44 Z"
      fill="#F87171"
    />

    {/* Left Tonsil Fossa with white healing eschar */}
    <ellipse cx="43" cy="54" rx="7" ry="10" fill="#991B1B" />
    <path
      d="M40 50 C41 48 45 49 46 52 C47 55 45 58 43 57 C41 56 39 52 40 50 Z"
      fill="#FEF3C7"
      stroke="#FDE68A"
      strokeWidth="1"
    />
    <circle cx="44" cy="56" r="2" fill="#FFFFFF" />

    {/* Right Tonsil Fossa with white healing eschar */}
    <ellipse cx="77" cy="54" rx="7" ry="10" fill="#991B1B" />
    <path
      d="M74 50 C75 48 79 49 80 52 C81 55 79 58 77 57 C75 56 73 52 74 50 Z"
      fill="#FEF3C7"
      stroke="#FDE68A"
      strokeWidth="1"
    />
    <circle cx="76" cy="56" r="2" fill="#FFFFFF" />
  </svg>
);

// 3. Banyak Minum (Water bottles & glass)
export const WaterHydrationIllustration: React.FC<SvgProps> = ({ className = '', size = 72 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Botol dan gelas air minum"
  >
    {/* Glass with water */}
    <path
      d="M15 28 L19 68 C19.5 72 23 75 27 75 L38 75 C42 75 45.5 72 46 68 L50 28 Z"
      fill="#E0F2FE"
      stroke="#38BDF8"
      strokeWidth="2.5"
    />
    <path
      d="M18 42 L20 67 C20.5 70 23 72 26 72 L39 72 C42 72 44.5 70 45 67 L47 42 Z"
      fill="#7DD3FC"
      opacity="0.85"
    />
    {/* Water reflection */}
    <path d="M22 45 L24 64" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

    {/* Mineral Water Bottle */}
    {/* Bottle cap */}
    <rect x="52" y="8" width="16" height="7" rx="2" fill="#0284C7" />
    <rect x="54" y="15" width="12" height="4" fill="#38BDF8" />
    {/* Bottle body */}
    <path
      d="M50 24 C50 20 54 18 58 18 L62 18 C66 18 70 20 70 24 L72 38 C72 40 71 42 69 43 C71 44 72 46 72 48 L72 68 C72 73 68 76 63 76 L57 76 C52 76 48 73 48 68 L48 48 C48 46 49 44 51 43 C49 42 48 40 48 38 Z"
      fill="#BAE6FD"
      stroke="#0284C7"
      strokeWidth="2.5"
    />
    <rect x="49" y="44" width="22" height="14" rx="2" fill="#E0F2FE" opacity="0.8" />
    {/* Water wave inside bottle */}
    <path d="M51 32 Q60 36 69 32" stroke="#38BDF8" strokeWidth="2" />
  </svg>
);

// 4. Tetap Makan (Soft Porridge Bowl & Spoon)
export const SoftFoodIllustration: React.FC<SvgProps> = ({ className = '', size = 72 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Mangkuk bubur sup hangat dan lembut"
  >
    {/* Side saucer */}
    <ellipse cx="62" cy="62" rx="14" ry="7" fill="#E2B176" stroke="#C48842" strokeWidth="2" />
    <ellipse cx="62" cy="61" rx="10" ry="4" fill="#FCEBD5" />

    {/* Main Bowl Plate base */}
    <ellipse cx="38" cy="64" rx="30" ry="10" fill="#E5E7EB" />
    <path
      d="M12 40 C12 60 22 68 38 68 C54 68 64 60 64 40 Z"
      fill="#F5EDE4"
      stroke="#D5A26B"
      strokeWidth="2.5"
    />
    <ellipse cx="38" cy="40" rx="26" ry="10" fill="#FCF8F2" stroke="#D5A26B" strokeWidth="2.5" />

    {/* Porridge soup inside */}
    <ellipse cx="38" cy="41" rx="22" ry="7.5" fill="#FCE7C8" />
    {/* Soft broth swirls and garnish */}
    <circle cx="32" cy="40" r="2.5" fill="#F59E0B" />
    <circle cx="44" cy="42" r="2" fill="#10B981" />
    <circle cx="38" cy="43" r="1.5" fill="#10B981" />

    {/* Spoon */}
    <path
      d="M48 20 C54 16 62 18 64 24 C65 28 60 34 54 36 L42 42"
      stroke="#9CA3AF"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <ellipse cx="58" cy="26" rx="6" ry="4" transform="rotate(-25 58 26)" fill="#D1D5DB" />
  </svg>
);

// 5. Istirahat Cukup (Person resting in bed)
export const RestSleepIllustration: React.FC<SvgProps> = ({ className = '', size = 72 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Orang beristirahat dan tidur nyenyak di tempat tidur"
  >
    {/* Bed Backboard */}
    <rect x="8" y="32" width="64" height="40" rx="6" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="2" />

    {/* Soft fluffy pillow */}
    <ellipse cx="28" cy="42" rx="16" ry="10" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
    <ellipse cx="28" cy="41" rx="13" ry="7" fill="#FFFFFF" />

    {/* Resting head */}
    <circle cx="34" cy="38" r="10" fill="#FDE2CD" />
    {/* Dark Hair */}
    <path d="M25 38 C25 29 34 26 42 30 C45 35 44 40 43 44 C38 43 32 44 26 40 Z" fill="#3E2E2A" />
    {/* Closed peaceful eye */}
    <path d="M35 39 Q38 42 41 39" stroke="#3E2E2A" strokeWidth="1.5" strokeLinecap="round" />

    {/* Blanket */}
    <path
      d="M10 50 C24 45 42 44 70 48 L70 70 C70 73 67 76 64 76 L16 76 C13 76 10 73 10 70 Z"
      fill="#93C5FD"
      stroke="#3B82F6"
      strokeWidth="2"
    />
    {/* Blanket fold */}
    <path d="M12 51 Q38 46 68 50" stroke="#BFDBFE" strokeWidth="3" strokeLinecap="round" />

    {/* Sleep "Zzz" */}
    <path d="M52 18 L60 18 L53 26 L61 26" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M63 10 L68 10 L64 15 L69 15" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 6. Kebersihan Mulut (Toothbrush, tooth, mouthwash)
export const OralHygieneIllustration: React.FC<SvgProps> = ({ className = '', size = 72 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Sikat gigi, gigi bersih, dan botol obat kumur"
  >
    {/* Mouthwash bottle */}
    <rect x="54" y="24" width="10" height="6" rx="1.5" fill="#0369A1" />
    <path
      d="M51 32 C51 30 53 29 55 29 L63 29 C65 29 67 30 67 32 L69 66 C69 69 66 72 63 72 L55 72 C52 72 49 69 49 66 Z"
      fill="#38BDF8"
      stroke="#0284C7"
      strokeWidth="2"
    />
    <rect x="52" y="44" width="14" height="14" rx="2" fill="#FFFFFF" opacity="0.9" />
    <path d="M56 51 H62" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />

    {/* Happy clean tooth */}
    <path
      d="M30 42 C24 42 22 46 22 52 C22 59 24 64 26 70 C27 73 30 73 31 70 C32 66 33 62 35 62 C37 62 38 66 39 70 C40 73 43 73 44 70 C46 64 48 59 48 52 C48 46 46 42 40 42 C38 42 36 43 35 44 C34 43 32 42 30 42 Z"
      fill="#FFFFFF"
      stroke="#60A5FA"
      strokeWidth="2.2"
    />
    {/* Tooth happy face */}
    <circle cx="29" cy="51" r="1.5" fill="#3B82F6" />
    <circle cx="41" cy="51" r="1.5" fill="#3B82F6" />
    <path d="M32 55 Q35 58 38 55" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />

    {/* Toothbrush angled */}
    <path
      d="M12 36 L38 12 C40 10 44 11 45 13 L47 15 C48 17 48 20 46 22 L20 45"
      stroke="#0284C7"
      strokeWidth="4"
      strokeLinecap="round"
    />
    {/* Bristles */}
    <path
      d="M38 12 L44 7 C45 6 47 7 48 8 L52 13 C53 14 52 16 51 17 L45 22"
      fill="#93C5FD"
      stroke="#38BDF8"
      strokeWidth="1.5"
    />
  </svg>
);

// 7. Minum Obat Sesuai Resep (Blister pack of pills & capsules)
export const MedicineScheduleIllustration: React.FC<SvgProps> = ({ className = '', size = 72 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Kemasan obat tablet dan kapsul pereda nyeri"
  >
    {/* Blister pack card */}
    <rect
      x="12"
      y="15"
      width="44"
      height="54"
      rx="6"
      fill="#E0F2FE"
      stroke="#38BDF8"
      strokeWidth="2.5"
      transform="rotate(-8 34 42)"
    />
    {/* Blister pill bubbles */}
    <circle cx="25" cy="28" r="5" fill="#0284C7" />
    <circle cx="39" cy="26" r="5" fill="#0284C7" />
    <circle cx="27" cy="42" r="5" fill="#0284C7" />
    <circle cx="41" cy="40" r="5" fill="#0284C7" />
    <circle cx="29" cy="56" r="5" fill="#0284C7" />
    <circle cx="43" cy="54" r="5" fill="#0284C7" />

    {/* Capsule pill in front (yellow & blue) */}
    <g transform="rotate(25 58 55)">
      <rect x="50" y="44" width="12" height="24" rx="6" fill="#F59E0B" />
      <path d="M50 56 H62 V62 C62 65.3 59.3 68 56 68 C52.7 68 50 65.3 50 62 Z" fill="#3B82F6" />
      <rect x="50" y="44" width="12" height="24" rx="6" stroke="#D97706" strokeWidth="2" />
    </g>

    {/* Round red pill */}
    <circle cx="64" cy="62" r="7" fill="#EF4444" stroke="#DC2626" strokeWidth="2" />
    <line x1="60" y1="62" x2="68" y2="62" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// 8. Calendar / Bleeding risk reminder icon
export const CalendarReminderIllustration: React.FC<SvgProps> = ({ className = '', size = 56 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Kalender pengingat pemulihan dua minggu"
  >
    <rect x="8" y="14" width="48" height="42" rx="8" fill="#FFFFFF" stroke="#10B981" strokeWidth="3" />
    <path d="M8 24 H56" stroke="#10B981" strokeWidth="3" />
    {/* Ring binders */}
    <rect x="18" y="8" width="5" height="10" rx="2.5" fill="#059669" />
    <rect x="41" y="8" width="5" height="10" rx="2.5" fill="#059669" />
    {/* Grid dots */}
    <circle cx="20" cy="33" r="2.5" fill="#6EE7B7" />
    <circle cx="32" cy="33" r="2.5" fill="#6EE7B7" />
    <circle cx="44" cy="33" r="2.5" fill="#6EE7B7" />
    <circle cx="20" cy="44" r="2.5" fill="#6EE7B7" />
    <circle cx="32" cy="44" r="3" fill="#EF4444" />
    <circle cx="44" cy="44" r="2.5" fill="#6EE7B7" />
  </svg>
);

// 9. Larangan: Aktivitas Fisik Berat (Running / Exercise)
export const HeavyExerciseAvoidIllustration: React.FC<SvgProps> = ({ className = '', size = 70 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Larangan olahraga dan lari berat"
  >
    {/* Soft red-peach circle background */}
    <circle cx="40" cy="40" r="36" fill="#FEE2E2" />

    {/* Runner figure */}
    <circle cx="48" cy="22" r="6" fill="#EA580C" />
    {/* Torso */}
    <path d="M44 28 L37 44 L44 48" stroke="#EA580C" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Arms */}
    <path d="M43 32 L54 30 L59 36" stroke="#EA580C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M39 35 L28 37 L24 33" stroke="#EA580C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    {/* Legs */}
    <path d="M37 44 L26 52 L20 62" stroke="#1D4ED8" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M42 47 L52 53 L58 64" stroke="#1D4ED8" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* Heavy dumbbell on side */}
    <rect x="52" y="16" width="3" height="8" rx="1" fill="#475569" />
    <rect x="59" y="16" width="3" height="8" rx="1" fill="#475569" />
    <line x1="53" y1="20" x2="61" y2="20" stroke="#64748B" strokeWidth="2.5" />
  </svg>
);

// 10. Larangan: Makanan / Minuman Sangat Panas (Hot steaming coffee/soup)
export const HotFoodAvoidIllustration: React.FC<SvgProps> = ({ className = '', size = 70 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Cangkir minuman atau sup mengepul sangat panas"
  >
    <circle cx="40" cy="40" r="36" fill="#FEE2E2" />

    {/* Saucer */}
    <ellipse cx="40" cy="62" rx="26" ry="6" fill="#FFFFFF" stroke="#DC2626" strokeWidth="2" />

    {/* Cup */}
    <path
      d="M20 38 C20 54 28 58 40 58 C52 58 60 54 60 38 Z"
      fill="#FFFFFF"
      stroke="#DC2626"
      strokeWidth="2.5"
    />
    {/* Cup handle */}
    <path
      d="M58 41 C64 41 67 46 66 51 C65 54 61 56 57 54"
      stroke="#DC2626"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Hot beverage surface */}
    <ellipse cx="40" cy="38" rx="19" ry="5" fill="#78350F" />

    {/* Rising hot steam curls */}
    <path
      d="M32 30 C30 25 34 22 32 16"
      stroke="#EF4444"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M40 32 C38 24 43 20 40 13"
      stroke="#DC2626"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M48 30 C46 25 50 21 48 16"
      stroke="#EF4444"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

// 11. Larangan: Makanan Keras / Keripik Tajam (Hard chips & nuts)
export const HardFoodAvoidIllustration: React.FC<SvgProps> = ({ className = '', size = 70 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Keripik renyah dan kacang keras yang dapat menggores"
  >
    <circle cx="40" cy="40" r="36" fill="#FEE2E2" />

    {/* Crispy sharp corn chips / keripik */}
    <path
      d="M22 46 L38 24 L52 42 Z"
      fill="#FBBF24"
      stroke="#D97706"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M34 56 L46 36 L64 52 Z"
      fill="#F59E0B"
      stroke="#B45309"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    {/* Crack texture dots */}
    <circle cx="36" cy="40" r="1.5" fill="#B45309" />
    <circle cx="44" cy="46" r="1.5" fill="#B45309" />

    {/* Hard nuts / kacang */}
    <ellipse cx="24" cy="58" rx="7" ry="5" fill="#92400E" stroke="#78350F" strokeWidth="1.5" />
    <ellipse cx="58" cy="58" rx="6" ry="4.5" fill="#A16207" stroke="#78350F" strokeWidth="1.5" />
    <ellipse cx="44" cy="62" rx="7" ry="4.5" fill="#92400E" stroke="#78350F" strokeWidth="1.5" />
  </svg>
);

// 12. Larangan: Pedas & Asam (Chilies & Orange)
export const SpicyAcidAvoidIllustration: React.FC<SvgProps> = ({ className = '', size = 70 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Cabai pedas dan jeruk asam"
  >
    <circle cx="40" cy="40" r="36" fill="#FEE2E2" />

    {/* Citrus Orange slice */}
    <circle cx="54" cy="50" r="18" fill="#F97316" stroke="#EA580C" strokeWidth="2" />
    <circle cx="54" cy="50" r="15" fill="#FFEDD5" />
    {/* Orange segments */}
    <path d="M54 50 L54 37 A13 13 0 0 1 66 48 Z" fill="#FB923C" />
    <path d="M54 50 L66 52 A13 13 0 0 1 56 63 Z" fill="#FB923C" />
    <path d="M54 50 L52 63 A13 13 0 0 1 42 54 Z" fill="#FB923C" />
    <path d="M54 50 L42 48 A13 13 0 0 1 52 37 Z" fill="#FB923C" />
    <circle cx="54" cy="50" r="3" fill="#FFFFFF" />

    {/* Hot Red Chili */}
    <path
      d="M38 18 C39 20 40 24 38 30 C35 38 28 45 22 56 C20 60 17 64 15 65 C15 62 17 56 19 50 C23 40 27 30 32 22 Z"
      fill="#DC2626"
      stroke="#991B1B"
      strokeWidth="2"
    />
    {/* Green chili stalk */}
    <path
      d="M38 18 C39 14 43 12 46 11"
      stroke="#15803D"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path d="M34 21 C36 19 39 19 41 21" fill="#16A34A" />
  </svg>
);

// 13. Larangan: Merokok & Vape
export const SmokingAvoidIllustration: React.FC<SvgProps> = ({ className = '', size = 70 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Tanda dilarang merokok dan asap rokok"
  >
    <circle cx="40" cy="40" r="36" fill="#FEE2E2" />

    {/* Cigarette Body */}
    <rect x="18" y="38" width="14" height="7" rx="1" fill="#F59E0B" />
    <rect x="32" y="38" width="26" height="7" rx="1" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
    {/* Ash/Embers */}
    <rect x="58" y="38" width="4" height="7" fill="#EF4444" />

    {/* Smoke swirls */}
    <path
      d="M62 36 C64 30 60 25 64 18 C67 12 73 14 70 8"
      stroke="#94A3B8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    {/* Red prohibition circle with diagonal slash */}
    <circle cx="40" cy="40" r="30" stroke="#DC2626" strokeWidth="4.5" fill="none" />
    <line x1="19" y1="61" x2="61" y2="19" stroke="#DC2626" strokeWidth="4.5" strokeLinecap="round" />
  </svg>
);

// 14. Larangan: Hindari Mengejan (Straining on Toilet)
export const StrainingAvoidIllustration: React.FC<SvgProps> = ({ className = '', size = 70 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Hindari mengejan keras saat buang air besar"
  >
    <circle cx="40" cy="40" r="36" fill="#FEE2E2" />

    {/* Toilet Bowl */}
    <rect x="50" y="34" width="14" height="24" rx="2" fill="#E2E8F0" stroke="#64748B" strokeWidth="2" />
    <path
      d="M34 46 C34 44 38 42 46 42 L52 42 L52 54 C52 64 45 68 40 68 C35 68 34 62 34 56 Z"
      fill="#FFFFFF"
      stroke="#64748B"
      strokeWidth="2"
    />

    {/* Person sitting and straining */}
    <circle cx="28" cy="22" r="6" fill="#FDE2CD" />
    {/* Hair */}
    <path d="M22 22 C22 16 28 15 34 18 C33 22 30 24 24 24 Z" fill="#3A2E2B" />
    {/* Body */}
    <path d="M28 28 L28 44 L38 44" stroke="#2563EB" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Bent legs */}
    <path d="M38 44 L38 58 L32 64" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* Stress/straining mark */}
    <path d="M36 15 L40 18 L36 21" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M41 12 L45 15 L41 18" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 15. Larangan: Debu & Panas Berlebihan (Hot sun & dusty trees)
export const DustHeatAvoidIllustration: React.FC<SvgProps> = ({ className = '', size = 70 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Matahari terik dan lingkungan berdebu"
  >
    <circle cx="40" cy="40" r="36" fill="#FEE2E2" />

    {/* Blazing hot sun */}
    <circle cx="56" cy="24" r="12" fill="#F59E0B" stroke="#D97706" strokeWidth="2" />
    {/* Sun rays */}
    <line x1="56" y1="6" x2="56" y2="10" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="70" y1="24" x2="74" y2="24" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="66" y1="14" x2="69" y2="11" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="66" y1="34" x2="69" y2="37" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />

    {/* Tree & dusty clouds */}
    <rect x="24" y="44" width="6" height="22" rx="2" fill="#78350F" />
    {/* Foliage */}
    <circle cx="27" cy="40" r="14" fill="#65A30D" opacity="0.8" />
    <circle cx="36" cy="38" r="10" fill="#84CC16" opacity="0.8" />
    <circle cx="18" cy="42" r="9" fill="#4D7C0F" opacity="0.8" />

    {/* Dust swirls */}
    <path
      d="M32 60 C36 57 42 57 46 60 C50 63 56 63 60 60"
      stroke="#D97706"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M40 65 C44 63 48 63 52 65 C56 67 62 66 66 64"
      stroke="#D97706"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

// 16. Warning Badge (Segera ke IGD)
export const WarningBadgeIllustration: React.FC<SvgProps> = ({ className = '', size = 80 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 88 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Tanda peringatan bahaya darurat"
  >
    {/* Rounded Warning Triangle */}
    <path
      d="M44 8 C47 8 50 13 52 16 L81 66 C83 70 82 76 77 79 C75 80 73 81 70 81 L18 81 C12 81 8 76 9 71 C10 69 11 67 13 64 L40 16 C41 12 43 8 44 8 Z"
      fill="#FFFFFF"
    />
    <path
      d="M44 8 L81 66 C84 72 80 79 73 79 L15 79 C8 79 4 72 7 66 L44 8 Z"
      stroke="#FFFFFF"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    {/* Exclamation mark inside */}
    <line x1="44" y1="28" x2="44" y2="52" stroke="#DC2626" strokeWidth="8" strokeLinecap="round" />
    <circle cx="44" cy="65" r="4.5" fill="#DC2626" />
  </svg>
);
