import React from 'react';
import { Icon } from '@iconify/react';

const SocialMedia = (props) => {
  return (
    <div className={'social-icons-section'}>
      <a href="https://www.facebook.com/ohanaservicos">
        <Icon
          icon="bxl:facebook-circle"
          width={props.width1}
          height={'32px'}
          style={{
            marginRight: '0.3rem',
            color: props.color,
          }}
        />
      </a>
      <a href="https://www.instagram.com/ohana.servicos/">
        <Icon
          icon="entypo-social:instagram-with-circle"
          width={props.width2}
          height={'32px'}
          style={{ marginRight: '0.4rem', color: props.color }}
        />
      </a>
      <a href="https://wa.me/911504394">
        <Icon
          height={'32px'}
          icon="teenyicons:whatsapp-solid"
          width={props.width3}
          style={{ color: props.color }}
        />
      </a>
    </div>
  );
};

export default SocialMedia;
