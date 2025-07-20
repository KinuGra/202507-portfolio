# ディレクトリ構造
202507-portfolio/
├── app/
│   ├── layout.tsx            # 共通レイアウト
│   └── page.tsx              # トップページ（すべてを表示）
├── components/
│   ├── Header.tsx            # ナビゲーションバー（任意）
│   ├── Section.tsx           # セクションタイトル＋枠組み
│   └── Section.module.css    # SectionコンポーネントのCSS
├── data/
│   ├── works.ts              # 制作物データ
│   ├── articles.ts           # 記事データ
│   └── skills.ts             # スキルデータ
├── public/
│   └── icon.png              # プロフィールアイコンなど
├── styles/
│   └── globals.css           # グローバルCSS（リセット・ベース）
├── tsconfig.json             # @ エイリアスがある場合
└── next.config.js
