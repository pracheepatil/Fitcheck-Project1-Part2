# Custom Hooks

Component-level business logic hooks for FitCheck.

## Available Hooks

### `useOutfitUpload()`
Handles outfit file upload and AI analysis.

**Usage:**
```jsx
import { useOutfitUpload } from '../hooks';

function UploadComponent() {
  const { uploadOutfit, loading, error, analysisResult } = useOutfitUpload();
  
  const handleUpload = (file) => {
    uploadOutfit(file);
  };
  
  return (...)
}
```

**Returns:**
- `uploadOutfit(file)` - Upload and analyze outfit
- `clearAnalysis()` - Clear results
- `loading` - Loading state
- `error` - Error message
- `analysisResult` - Analysis response from API

---

### `useAuthentication()`
Handles user sign in, sign up, and sign out.

**Usage:**
```jsx
import { useAuthentication } from '../hooks';

function SignInPage() {
  const { signIn, loading, error, user } = useAuthentication();
  
  const handleSignIn = async (email, password) => {
    await signIn(email, password);
  };
  
  return (...)
}
```

**Returns:**
- `signIn(email, password)` - Sign in user
- `signUp(email, password, name)` - Create new user
- `signOut()` - Sign out user
- `user` - Current user object
- `loading` - Loading state
- `error` - Error message

---

### `useContactForm()`
Manages contact form state and submission.

**Usage:**
```jsx
import { useContactForm } from '../hooks';

function ContactPage() {
  const { formData, handleChange, submitForm, loading, success } = useContactForm();
  
  return (...)
}
```

**Returns:**
- `formData` - Form state object
- `handleChange(e)` - Handle input change
- `submitForm(e)` - Submit form to API
- `resetForm()` - Clear form
- `loading` - Submission loading state
- `error` - Validation/API error
- `success` - Submission success state

---

### `useTrends()`
Fetches and manages style trends data.

**Usage:**
```jsx
import { useTrends } from '../hooks';

function TrendsSection() {
  const { trends, loading, error, refreshTrends } = useTrends();
  
  return (...)
}
```

**Returns:**
- `trends` - Array of trend objects
- `loading` - Loading state
- `error` - Fetch error
- `refreshTrends()` - Refetch data

---

### `useOutfitHistory()`
Manages user's outfit history (fetch, delete, save).

**Usage:**
```jsx
import { useOutfitHistory } from '../hooks';

function OutfitGallery() {
  const { outfits, loading, deleteOutfit, saveOutfit } = useOutfitHistory();
  
  return (...)
}
```

**Returns:**
- `outfits` - Array of outfit objects
- `loading` - Loading state
- `error` - Error message
- `deleteOutfit(id)` - Remove outfit
- `saveOutfit(id, data)` - Update outfit
- `refreshOutfits()` - Refetch data

---

## Pattern

All hooks follow this pattern:
1. **State management** - Loading, error, data
2. **API calls** - Via `api` service
3. **Error handling** - Consistent error messages
4. **Side effects** - useEffect for auto-fetch

## Best Practices

- Keep hooks focused on one concern
- Always handle loading and error states
- Use hooks to avoid logic duplication
- Update README when adding new hooks
