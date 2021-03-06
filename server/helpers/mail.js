import config from '../../config/config';
import MailTemplate from '../controllers/mailTemplate.controller';

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(config.sendGridKey);

const options = {
  templatesFiles: [
    'sd-simple-template',
    'sd-template-comment'
  ],

  bodiesFiles: [
    'sd-simple-body',
    'sd-body-topic-maintainer',
    'sd-body-topic-publish',
    'sd-body-topic-new-question',
    'sd-body-topic-new-answer',
    'sd-body-topic-new-maintainer',
    'sd-body-post-comment-author',
    'sd-body-post-comment-reply',
    'sd-body-post-comment-mention'
  ],

  mailTemplates: [{
    name: 'simple',
    body: 'sd-simple-body'
  }, {
    name: 'topicMaintainer',
    body: 'sd-body-topic-maintainer'
  }, {
    name: 'topicPublish',
    body: 'sd-body-topic-publish'
  }, {
    name: 'topicNewMaintainer',
    body: 'sd-body-topic-new-maintainer'
  }, {
    name: 'topicQuestion',
    body: 'sd-body-topic-new-question'
  }, {
    name: 'topicAnswer',
    body: 'sd-body-topic-new-answer'
  }, {
    name: 'postNewCommentAuthor',
    body: 'sd-body-post-comment-author'
  }, {
    name: 'postNewCommentReply',
    body: 'sd-body-post-comment-reply'
  }, {
    name: 'postNewCommentMention',
    body: 'sd-body-post-comment-mention'
  }]
};

const mailTemplate = new MailTemplate(options, sgMail);

export default {
  sgMail,
  mailTemplate
};
