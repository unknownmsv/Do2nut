# if want to erly
web: https://wiki.unknownmsv.ir

api: https://apidb.unknownmsv.ir

# Wiki API Documentation

![Supabase + Node.js](https://img.shields.io/badge/Supabase-Node.js-green)
![REST API](https://img.shields.io/badge/Type-REST_API-blue)
![License](https://img.shields.io/badge/License-MIT-orange)

## 📌 Introduction

This project provides a RESTful API service for managing wiki articles with the following features:
- Article creation and management
- API Key authentication system
- Data storage in Supabase
- Rate limiting
- Modern TypeScript implementation

## 🌟 Features

- **JWT-based authentication**
- **Role-based access control**
- **Versioned content history**
- **Search functionality**
- **Markdown support**
- **Responsive design ready**

## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- npm v9+
- Supabase account
- PostgreSQL database

### Installation
```bash
git clone https://github.com/unknownmsv/do2nut.git
cd Do2nut
npm install
cp .env.example .env
```

### Configuration
Edit the `.env` file:
```env
PORT=3000
SUPABASE_URL=your-project-url
SUPABASE_KEY=your-anon-key
JWT_SECRET=your-jwt-secret
API_KEYS_TABLE=api_keys
ARTICLES_TABLE=articles
```

### Running the Server
```bash
npm run dev  # Development mode
npm start    # Production mode
```

## 📚 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/auth/key` | Generate new API key |

### Articles
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET    | `/articles` | List all articles | No |
| GET    | `/articles/:id` | Get specific article | No |
| POST   | `/articles` | Create new article | Yes |
| PUT    | `/articles/:id` | Update article | Yes |
| DELETE | `/articles/:id` | Delete article | Yes |

## 🔑 Authentication

Include your API key in requests:
```bash
curl -H "x-api-key: YOUR_API_KEY" https://api.example.com/articles
```

## 📦 Database Schema

### `articles` table
| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| title | TEXT | Article title |
| content | TEXT | Article content |
| tags | TEXT[] | Array of tags |
| created_at | TIMESTAMP | Creation time |
| updated_at | TIMESTAMP | Last update time |

### `api_keys` table
| Column | Type | Description |
|--------|------|-------------|
| key | TEXT | API key |
| description | TEXT | Key description |
| is_active | BOOLEAN | Key status |
| created_at | TIMESTAMP | Creation time |

## 🛠️ Development

### Code Structure
```
src/
├── app.ts            # Main application
├── config/           # Configuration files
├── controllers/      # Business logic
├── interfaces/       # TypeScript types
├── middlewares/      # Express middlewares
├── routes/           # API endpoints
├── services/         # External services
└── utils/            # Helper functions
```

### Testing
```bash
npm test
```

### Building
```bash
npm run build
```

## 🌍 Deployment

### Liara CLI Deployment
```bash
npm install -g @liara/cli
liara login
liara init
liara deploy
```

### Environment Variables on Liara
Set these in your Liara dashboard:
- `SUPABASE_URL`
- `SUPABASE_KEY`
- `JWT_SECRET`
- `NODE_ENV=production`

## 📜 License

MIT License

## 🤝 Contributing

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📧 Contact

For support, email: support@donutmsv.ir

---

This documentation will help developers understand and work with your API. You can extend it with more detailed examples or additional sections as needed.
