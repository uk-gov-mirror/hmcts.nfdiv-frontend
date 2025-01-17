import { mockRequest } from '../../test/unit/utils/mockRequest';
import { Checkbox } from '../app/case/case';
import { Gender, YesOrNo } from '../app/case/definition';
import { AppRequest } from '../app/controller/AppRequest';

import { sequence } from './sequence';
import { HAS_RELATIONSHIP_BROKEN_URL, RELATIONSHIP_NOT_BROKEN_URL, YOUR_DETAILS_URL } from './urls';

import { getNextIncompleteStepUrl, getNextStepUrl } from './index';

describe('Steps', () => {
  describe('getNextStep()', () => {
    let mockReq: AppRequest;
    beforeEach(() => {
      mockReq = mockRequest();
    });

    it('returns the next step when correct details a passed', () => {
      mockReq.originalUrl = YOUR_DETAILS_URL;
      const data = { gender: Gender.MALE };
      expect(getNextStepUrl(mockReq, data)).toBe(HAS_RELATIONSHIP_BROKEN_URL);
    });

    it('moves into a dead end when the response matches', () => {
      mockReq.originalUrl = HAS_RELATIONSHIP_BROKEN_URL;
      const data = { screenHasUnionBroken: YesOrNo.NO };
      const actual = getNextStepUrl(mockReq, data);
      expect(actual).toBe(RELATIONSHIP_NOT_BROKEN_URL);
    });

    it('keeps the query string', () => {
      mockReq.originalUrl = `${YOUR_DETAILS_URL}?customQueryString`;
      const data = { gender: Gender.MALE };
      expect(getNextStepUrl(mockReq, data)).toBe(`${HAS_RELATIONSHIP_BROKEN_URL}?customQueryString`);
    });
  });

  describe('getNextIncompleteStepUrl()', () => {
    let mockReq: AppRequest;
    beforeEach(() => {
      mockReq = mockRequest();
    });

    it('returns the first url that fails validation', () => {
      expect(getNextIncompleteStepUrl(mockReq)).toBe(YOUR_DETAILS_URL);
    });

    it('returns the next incomplete step if previous is valid', () => {
      mockReq.session.userCase.gender = Gender.MALE;
      mockReq.session.userCase.sameSex = Checkbox.Unchecked;
      expect(getNextIncompleteStepUrl(mockReq)).toBe(HAS_RELATIONSHIP_BROKEN_URL);
    });

    it('returns the previous step if its a dead end', () => {
      mockReq.session.userCase.gender = Gender.MALE;
      mockReq.session.userCase.sameSex = Checkbox.Unchecked;
      mockReq.session.userCase.screenHasUnionBroken = YesOrNo.NO;
      const actual = getNextIncompleteStepUrl(mockReq);
      expect(actual).toBe(HAS_RELATIONSHIP_BROKEN_URL);
    });

    it('keeps the query string', () => {
      mockReq.originalUrl = `${YOUR_DETAILS_URL}?customQueryString`;
      mockReq.session.userCase.gender = Gender.MALE;
      mockReq.session.userCase.sameSex = Checkbox.Unchecked;
      expect(getNextIncompleteStepUrl(mockReq)).toBe(`${HAS_RELATIONSHIP_BROKEN_URL}?customQueryString`);
    });

    it('goes back one page if the step is incomplete & excluded from continue application', () => {
      sequence[1].excludeFromContinueApplication = true;

      mockReq.originalUrl = HAS_RELATIONSHIP_BROKEN_URL;
      mockReq.session.userCase.gender = Gender.MALE;
      mockReq.session.userCase.sameSex = Checkbox.Unchecked;
      const actual = getNextIncompleteStepUrl(mockReq);
      expect(actual).toBe(YOUR_DETAILS_URL);
    });
  });
});
