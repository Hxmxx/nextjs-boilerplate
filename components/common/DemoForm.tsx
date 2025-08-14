'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function DemoForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`제출된 데이터: ${JSON.stringify(formData, null, 2)}`);
  };

  const handleCancel = () => {
    setFormData({ name: '', email: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>데모 폼</CardTitle>
        <CardDescription>
          컴포넌트들이 어떻게 작동하는지 확인해보세요
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="이름"
            placeholder="이름을 입력하세요"
            helperText="실제로는 이 데이터가 저장되지 않습니다"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
          <Input
            label="이메일"
            type="email"
            placeholder="이메일을 입력하세요"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
          <div className="flex gap-2">
            <Button type="submit" className="flex-1">제출</Button>
            <Button type="button" variant="outline" className="flex-1" onClick={handleCancel}>
              취소
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
