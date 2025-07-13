import { setMeta } from '@/_libs';

import type { Route } from './+types/_index';

export function loader({}: Route.LoaderArgs) {
  return {};
}

export function action({}: Route.ActionArgs) {
  return {};
}

export function meta({}: Route.MetaArgs) {
  return setMeta({
    title: '홈',
    url: '/',
  });
}

export default function HomePage({}: Route.ComponentProps) {
  return (
    <div>
      홈
    </div>
  );
}
