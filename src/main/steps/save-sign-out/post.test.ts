import { mockRequest } from '../../../test/unit/utils/mockRequest';
import { mockResponse } from '../../../test/unit/utils/mockResponse';
import { Gender } from '../../app/case/case';
import { Form } from '../../app/form/Form';
import { commonContent } from '../../steps/common/common.content';
import { saveAndSignOutContent } from '../../steps/save-sign-out/content';

import { SaveSignOutPostController } from './post';

describe('SaveSignOutPostController', () => {
  it('saves and signs out even if there are errors', async () => {
    const errors = [{ field: 'gender', errorName: 'required' }];
    const body = { gender: Gender.Female, saveAndSignOut: true };
    const mockForm = ({
      getErrors: () => errors,
      getParsedBody: () => body,
    } as unknown) as Form;
    const controller = new SaveSignOutPostController(mockForm);

    const req = mockRequest({ body, session: { user: { email: 'test@example.com' } } });
    const res = mockResponse();
    await controller.post(req, res);

    expect(req.session.userCase).toEqual({ divorceOrDissolution: 'divorce', gender: 'female', id: '1234' });
    expect(req.locals.api.updateCase).toHaveBeenCalledWith('1234', { gender: 'female' });

    expect(req.session.errors).toBe(undefined);
    expect(req.session.destroy).toHaveBeenCalled();
    expect(res.render).toHaveBeenCalledWith(`${__dirname}/../../steps/save-sign-out/template.njk`, {
      ...commonContent['en'],
      ...saveAndSignOutContent['en'],
      email: 'test@example.com',
    });
  });
});