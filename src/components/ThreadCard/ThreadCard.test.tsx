import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ThreadCard from './index';

const DummyData = {
  id: 1,
  ThreadAuthorAvatar: 'https://i.pravatar.cc/150?img=1',
  ThreadAuthorUsername: 'John.Doe',
  ThreadAuthorUrl: '/user/john.doe',
  TheadBody:
    'm baby slow-carb cloud bread vexillologist viral sustainable chia franzen plaid polaroid swag hoodie schlitz lomo. Synth gochujang tacos, venmo photo booth master cleanse glossier fixie banh mi. Venmo quinoa cornhole church-key taxidermy woke kinfolk copper mug chicharrones gatekeep knausgaard +1 letterpress direct trade asymmetrical. Microdosing listicle big mood, taiyaki ethical semiotics farm-to-table hot chicken',
  ThreadReplys: '2.3k',
  ThreadPostTime: 1694336652838,
};

describe('Thread - Card', () => {
  it('Renders the Thread card', () => {
    render(
      <ThreadCard
        ThreadAuthorUrl={DummyData.ThreadAuthorUrl}
        ThreadAuthorAvatar={DummyData.ThreadAuthorAvatar}
        ThreadAuthorUsername={DummyData.ThreadAuthorUsername}
        TheadBody={DummyData.TheadBody}
        ThreadReplys={DummyData.ThreadReplys}
        ThreadPostTime={DummyData.ThreadPostTime}
      />
    );

    screen.debug();
  });
});
