'use client';

import * as React from 'react';
import { Input } from './input';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

function PasswordInput({ className, ...props }: React.ComponentProps<'input'>) {
  const [showPassword, setShowPassword] = React.useState(false);
  const type = showPassword ? 'text' : 'password';

  return (
    <div className="relative">
      <Input {...props} type={type} className={cn('pr-10', className)} />
      <span className="absolute top-[7px] right-2 cursor-pointer select-none">
        {showPassword ? (
          <EyeIcon onClick={() => setShowPassword(false)} />
        ) : (
          <EyeOffIcon onClick={() => setShowPassword(true)} />
        )}
      </span>
    </div>
  );
}

PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
